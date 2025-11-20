import { Chapter } from "../types";
import q2Img from "../images/q2.jpg";
import q3Img from "../images/q3.jpg";
import q4Img from "../images/q4.jpg";
import q5Img from "../images/q5.jpg";
import q6Img from "../images/q6.jpg";
import q7Img from "../images/q7.jpg";
import q9Img from "../images/q9.jpeg";
import q14Img from "../images/q14.avif";
import q27Img from "../images/q27.jpg";
import q30Img from "../images/q30.jpg";

export const chapter1_1: Chapter = {
  id: "8",
  title: "Chương 1: Engine system 1",
  subjectId: "oto-english-2",
  questions: [
    {
      id: "q1",
      text: "What part moves up and down creating power?",
      options: ["Cylinder", "Flywheel", "Piston", "Head"],
      correctIndex: 2,
    },
    {
      id: "q2",
      text: "Identify this part?",
      image: q2Img,
      options: ["Flywheel", "Oil slinger", "Crankshaft", "Camshaft"],
      correctIndex: 3,
    },
    {
      id: "q3",
      text: "Identify this part?",
      image: q3Img,
      options: ["Spark Plug", "Cylinder Head Bolt", "Armature", "Cylinder Head"],
      correctIndex: 0, // vẫn đúng A như yêu cầu
    },
    {
      id: "q4",
      text: "Identify the part?",
      image: q4Img,
      options: ["Piston", "Crankshaft", "Flywheel", "Camshaft"],
      correctIndex: 1,
    },
    {
      id: "q5",
      text: "Identify the part?",
      image: q5Img,
      options: ["Camshaft", "Connecting Rod", "Wrist Pin", "Tappet"],
      correctIndex: 1,
    },
    {
      id: "q6",
      text: "The major difference in Two stroke and Four stroke engines is?",
      image: q6Img,
      options: ["What it is used on", "Number of strokes to complete a power cycle", "Mixing oil with the gas", "The type of parts"],
      correctIndex: 1,
    },
    {
      id: "q7",
      text: "Engine displacement is the measure of?",
      image: q7Img,
      options: ["The size of the outside of the engine", "How much air all the pistons can move in a singular stroke", "How much oil an engine holds", "How much one piston can move"],
      correctIndex: 1,
    },
    {
      id: "q8",
      text: "Of the two valves inside the engine, which one is bigger?",
      options: ["Exhaust", "Neither", "Intake", "Same size"],
      correctIndex: 2,
    },
    {
      id: "q9",
      text: "What Is This?",
      image: q9Img,
      options: ["Front Axle", "Engine", "Battery", "Transmission"],
      correctIndex: 1,
    },
    {
      id: "q10",
      text: "The motion of the cam is transferred to the valves through?",
      options: ["Camshaft pulley", "Rocker arms", "Valve stems", "Pistons"],
      correctIndex: 1,
    },
    {
      id: "q11",
      text: "If the engine coolant leaks into the engine oil, then engine oil?",
      options: ["None of these", "Appears milky", "Turns black", "Becomes foamy"],
      correctIndex: 1,
    },
    {
      id: "q12",
      text: "The oil pump is driven by the?",
      options: ["Crankshaft via drive belt", "Crankshaft directly", "Alternator shaft", "Camshaft"],
      correctIndex: 1,
    },
    {
      id: "q13",
      text: "What is the order of operation of a 4 stroke engine?",
      options: ["Exhaust, Intake, Compression, Power", "Intake, Compression, Power, Exhaust", "Intake, Power, Compression, Exhaust", "Compression, Exhaust, Power, Intake"],
      correctIndex: 1,
    },
    {
      id: "q14",
      text: "Fills the area of the engine called the Cylinder?",
      image: q14Img,
      options: ["Filler", "Piston", "Cam gear", "Lifter"],
      correctIndex: 1,
    },
    {
      id: "q15",
      text: "The size of the engine intake valve is?",
      options: ["Does not depend upon the size of exhaust valve", "Larger than that of exhaust valve", "Smaller than that of exhaust valve", "Same as that of exhaust valve"],
      correctIndex: 1,
    },
    {
      id: "q16",
      text: "The device used to measure the clearance between the valve and tappet of an IC Engine is?",
      options: ["Snap gauge", "Feeler gauge", "Micrometer", "Slip gauge"],
      correctIndex: 1,
    },
    {
      id: "q17",
      text: "By which relation speed of piston can be calculated inside cylinder block (L-Length of stroke, D-Diameter, N-speed of engine)?",
      options: ["2πLD", "2LN", "2LDN", "2πL"],
      correctIndex: 1,
    },
    {
      id: "q18",
      text: "The vehicle ride will be comfortable if?",
      options: ["All of these", "Unsprung mass is kept minimum", "Vehicle mass is kept minimum", "Sprung mass is kept minimum"],
      correctIndex: 1,
    },
    {
      id: "q19",
      text: "The effect of having excess camber is?",
      options: ["Excessive steering alignment torque", "Uneven tyre wear", "Hard steering", "Too much traction"],
      correctIndex: 1,
    },
    {
      id: "q20",
      text: "If the air-fuel mixture in a spark ignition engine is too rich, then air-fuel ratio is about?",
      options: ["15:1", "10:1", "17:1", "13:1"],
      correctIndex: 1,
    },
    {
      id: "q21",
      text: "The co-efficient of rolling resistance for a truck weighing 63 500 N is 0.018. The rolling resistance to the truck is?",
      options: ["114.3 N", "1143 N", "11.43 N", "1.143 N"],
      correctIndex: 1,
    },
    {
      id: "q22",
      text: "For idling condition in automotive engines, the air-fuel mixture must be?",
      options: ["None of the mentioned", "Rich", "Lean", "Chemically balanced"],
      correctIndex: 1,
    },
    {
      id: "q23",
      text: "For cruising condition in automotive engines, the air-fuel mixture must be?",
      options: ["Lean", "Rich", "None of the mentioned", "Chemically balanced"],
      correctIndex: 0,
    },
    {
      id: "q24",
      text: "For high power condition in automotive engines, the air-fuel mixture must be?",
      options: ["Chemically balanced", "Rich", "None of the mentioned", "Lean"],
      correctIndex: 1,
    },
    {
      id: "q25",
      text: "To prevent overheating of exhaust valve and the area near it, the air-fuel mixture must be?",
      options: ["Rich", "None of the mentioned", "Lean", "Chemically balanced"],
      correctIndex: 0,
    },
    {
      id: "q26",
      text: "____________ is the method of governing used in petrol engine?",
      options: ["All of the mentioned", "Quality governing", "Hit and miss governing", "Quantity governing"],
      correctIndex: 1,
    },
    {
      id: "q27",
      text: "What is the purpose of this tool?",
      image: q27Img,
      options: ["To release pressure for air suspension system", "To insert piston ring into cylinder block", "To remove oil filter from the engine", "To align marking of the timing belt pulley"],
      correctIndex: 1,
    },
    {
      id: "q28",
      text: "What tool are use when tighten cylinder head?",
      options: ["L-handle", "Torque Wrench", "Adjustable Wrench", "Torque Converter"],
      correctIndex: 1,
    },
    {
      id: "q29",
      text: "What is the last stroke in the 4-stroke cycle engine?",
      options: ["Exhaust stroke", "Power stroke", "Compression stroke", "Intake stroke"],
      correctIndex: 0,
    },
    {
      id: "q30",
      text: "Which system use this component?",
      image: q30Img,
      options: ["Turbocharger System", "Lubricating System", "Suspension System", "Exhaust System"],
      correctIndex: 1,
    },
    {
      id: "q31",
      text: "Heat engines burn a ________ to create heat which is then used to do work?",
      options: ["Coal", "Fuel", "Material", "Liquid"],
      correctIndex: 1,
    },
    {
      id: "q32",
      text: "The pistons of IC engines are usually made of ______________?",
      options: ["Aluminium alloy", "Iron cast", "Aluminium", "Stainless steel"],
      correctIndex: 0,
    },
    {
      id: "q33",
      text: "The ___________ is called the backbone of an engine?",
      options: ["Valves", "Crankshaft", "Camshaft", "Driveshaft"],
      correctIndex: 1,
    },
    {
      id: "q34",
      text: "The major function of the camshaft is to operate the ___________ valves?",
      options: ["Inlet and exhaust valves", "Inlet valves", "Intake valves", "Exhaust valves"],
      correctIndex: 0,
    },
    {
      id: "q35",
      text: "The piston _____ in the cylinder bore to evacuate the combustion chamber?",
      options: ["All correct", "Moves downward", "Descends", "Passes from a higher to a lower place"],
      correctIndex: 0,
    },
    {
      id: "q36",
      text: "A petrol engine, whether four- or two-stroke, is called a _____?",
      options: ["Spark Ignition engine", "All correct", "Compressed Ignition engine", "Electrical Ignition engine"],
      correctIndex: 0,
    },
    {
      id: "q37",
      text: "There are two methods by which fuel is injected into a combustion chamber, they are _____?",
      options: ["Direct or indirect injection", "All correct", "Flywheel", "Compressing & exhausting"],
      correctIndex: 0,
    },
    {
      id: "q38",
      text: "Spark plug are mounted inside ________?",
      options: ["Cylinder block", "Cylinder head", "Piston", "Crank case"],
      correctIndex: 1,
    },
    {
      id: "q39",
      text: "Which of the following provides passages for flow of cooling water?",
      options: ["Cylinder head", "Cylinder block", "Piston", "Crank case"],
      correctIndex: 0,
    },
    {
      id: "q40",
      text: "What transfers motion from the camshaft to the push rod in an OHV engine?",
      options: ["Lifter", "Rocker Pivot", "Rocker Arm", "Valve Spring"],
      correctIndex: 0,
    },
  ],
};