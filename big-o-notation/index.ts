import { Timer } from './Timer';
import { addUpTo1, addUpTo2, printAllPairs } from './algorithms';

const timer = new Timer();

//Measuring algorithm performance with time is not good
timer.logTimeElapsed(addUpTo1, 1000000000); // ~0.7s
timer.logTimeElapsed(addUpTo2, 1000000000); // ~0.000013s
timer.logTimeElapsed(printAllPairs, 100); // ~0.000013s
