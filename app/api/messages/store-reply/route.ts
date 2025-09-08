import { NextRequest, NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  const { email, name, message, subject, isAdmin } = await req.json();
  if (!email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  
  const client = await getMongoClient();
  const db = client.db();
  const threads = db.collection('messageThreads');

  // Add reply to thread
  await threads.updateOne(
    { email },
    { 
      $push: { 
        messages: { 
          name: isAdmin ? 'Admin' : name, 
          message, 
          date: new Date(),
          subject: subject || null,
          isAdmin: isAdmin || false
        } 
      } 
    } as any
  );
  
  return NextResponse.json({ success: true });
}
