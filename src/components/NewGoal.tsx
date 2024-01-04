import { useRef } from "react";

type NewGoalProps = {
  handleAddGoal: (goalTitle: string, goalDescription: string) => void;
};

export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  function handleGoalSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const goalTitle = goalRef.current!.value;
    const goalDescription = descriptionRef.current!.value;

    handleAddGoal(goalTitle, goalDescription);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleGoalSubmit}>
      <label htmlFor="goal">Enter Goal</label>
      <input type="text" id="goal" required ref={goalRef} />
      <label htmlFor="description">Enter Description</label>
      <input type="text" id="description" ref={descriptionRef} required />
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
