import mongoose from "mongoose";

export type MongooseConnectionCache = {
  connectionDB: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseConnectionCache | undefined;
}

export interface CourseType {
  _id: string;
  userid: string;
  role: string;
  type: string;
  level: string;
  amount: number;
  techstack: string[];
  questions: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
