export class Project {
  constructor ( public name:string,
                public lead:string,
                public description:string,
                public fundingGoal: number,
                public currentFunding: number,
                public swag: string,
                public budgetDeets: string,) { }
}
