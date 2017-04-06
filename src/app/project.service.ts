import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/' + projectId);
  }

  updateProject(projectToDisplay, newName, newLead, newDescription, newFundingGoal, newSwag, newBudgetDeets){
    var projectEntryInFirebase = this.getProjectById(projectToDisplay.$key);
    projectEntryInFirebase.update({name: newName, lead: newLead, description: newDescription, fundingGoal: newFundingGoal, swag: newSwag, budgetDeets: newBudgetDeets});
  }

  deleteProject(projectToDelete) {
    let projectEntryInFirebase = this.getProjectById(projectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
