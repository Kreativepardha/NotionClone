import express from 'express'
import 'dotenv/config'





export const JWT_SECRET = process.env.JWT_SECRET  || "superseceret"
