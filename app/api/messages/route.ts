import { NextRequest, NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const client = await getMongoClient();
  const db = client.db();
  const threads = db.collection('messageThreads');

  // Find thread by email
  let thread = await threads.findOne({ email });
  if (thread) {
    // Append message to thread
    await threads.updateOne(
      { email },
      { $push: { messages: { name, message, date: new Date() } } } as any
    );
  } else {
    // Create new thread
    await threads.insertOne({
      email,
      name,
      messages: [{ name, message, date: new Date() }],
      createdAt: new Date()
    });
  }
  return NextResponse.json({ success: true });
}

export async function GET() {
  const client = await getMongoClient();
  const db = client.db();
  const threads = db.collection('messageThreads');
  const allThreads = await threads.find({}).toArray();
  return NextResponse.json(allThreads);
}
