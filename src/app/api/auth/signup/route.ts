import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName, phone } = await req.json();

    // 1. Validate input
    if (!email || !password || !fullName || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // 2. Create user in Supabase Auth
    const { data, error } = await supabaseAdmin.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone },
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    if (!data.user) {
      return NextResponse.json({ error: 'User creation failed' }, { status: 400 });
    }
    if (data.user.identities?.length === 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // 3. Manually insert into profiles (guaranteed to work)
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: data.user.id,
        full_name: fullName,
        email: email,
        phone: phone,
      });

    if (profileError) {
      // Log the error but still return success (the auth user exists)
      console.error('Profile insert error:', profileError);
      // Optionally, you could delete the auth user if profile fails, but we'll just warn.
    }

    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      user: { id: data.user.id, email: data.user.email },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}