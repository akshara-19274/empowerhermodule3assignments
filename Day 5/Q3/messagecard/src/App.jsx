import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards Demo</h1>
      <MessageCard title="Welcome" message="This is the first message card." />
      <MessageCard title="Reminder" message="Don't forget to submit your assignment." />
      <MessageCard title="Update" message="React project setup is complete." />
      <MessageCard title="Note" message="You can render multiple cards with different props." />
    </div>
  );
}

export default App;