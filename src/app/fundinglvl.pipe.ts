import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'fundinglvl',
  pure: false
})
export class FundinglvlPipe implements PipeTransform {

  transform(input: Project[], desiredFundingLvl) {
    var output: Project[] = [];
    if(desiredFundingLvl === "fullyFunded"){
      for(var index = 0; index < input.length; index++) {
        if(input[index].currentFunding === input[index].fundingGoal){
          output.push(input[index]);
        }
      }
      return output;
    } else if(desiredFundingLvl === "partiallyFunded"){
      for(var index = 0; index < input.length; index++) {
        if(input[index].currentFunding < input[index].fundingGoal && input[index].currentFunding > 0){
          output.push(input[index]);
        }
      }
      return output;
    } else if(desiredFundingLvl === "unfunded"){
      console.log(input);
      for(var index = 0; index < input.length; index++) {
        console.log("now we are here");
        if(input[index].currentFunding === 0){
          output.push(input[index]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
