import { Schema, models, model } from "mongoose";

// userId, username, role, type, level, techstack, amount

const CourseSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    role: {
      type: String,
    },
    level: {
      type: String,
    },
    techstack: {
      type: [String],
    },
    amount: {
      type: Number,
    },
    questions: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Course = models.Course || model("Course", CourseSchema);

export default Course;
