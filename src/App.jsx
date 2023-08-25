import PersonCard from "./assets/components/PersonCard";
function App() {
  return (
    <div className="App">
<PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}></PersonCard>
<PersonCard firstName={"John"} lastName={"Smith"} age={36} hairColor={"Brown"}></PersonCard>
<PersonCard firstName={"Gesmir"} lastName={"Shyti"} age={21} hairColor={"Black"}></PersonCard>
<PersonCard firstName={"Mike"} lastName={"Tyson"} age={55} hairColor={"Bold"}></PersonCard>
      
    </div>
  );
}
export default App;