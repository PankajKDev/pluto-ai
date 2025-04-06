import { Schema, models, model } from "mongoose";

// userId, username, role, type, level, techstack, amount

const CourseSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
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
