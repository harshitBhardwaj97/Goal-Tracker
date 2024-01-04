export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

type CourseGoalProps = {
  title: string;
  id: number;
  children: React.ReactNode;
  handleDeleteGoal: (id: number) => void;
};

export default function CourseGoal({
  title,
  children,
  id,
  handleDeleteGoal,
}: CourseGoalProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <button onClick={() => handleDeleteGoal(id)}>Delete Goal</button>
    </div>
  );
}
