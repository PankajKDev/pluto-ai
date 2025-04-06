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
  level: string;
  techstack: string[];
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
