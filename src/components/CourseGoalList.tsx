import { CourseGoal as Goal } from "./CourseGoal";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: Goal[];
  handleDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  handleDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            handleDeleteGoal={handleDelete}
            title={goal.title}
          >
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
