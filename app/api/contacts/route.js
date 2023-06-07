import { NextResponse } from 'next/server'
import contacts from './data.json'

export async function GET(request){
    return NextResponse.json(contacts)
}