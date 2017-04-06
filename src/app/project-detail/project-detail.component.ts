import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})

export class ProjectDetailComponent implements OnInit {
donateClicked = false;
projectToDisplay;
projectId;
editClicked = false;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private projectService:ProjectService) { }

  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
      console.log(this.projectId);
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      if(dataLastEmittedFromObserver){
        this.projectToDisplay = dataLastEmittedFromObserver;
        console.log(this.projectToDisplay);
      };
    });
  }

  donateClick() {
    this.donateClicked = true;
  }

  editClick() {
    this.editClicked = true;
  }

  funded(projectToDisplay){
    if (projectToDisplay.fundingGoal === projectToDisplay.currentFunding){
      return "bg-success";
    } else if (projectToDisplay.currentFunding > projectToDisplay.fundingGoal) {
      return "bg-primary";
    } else if ((projectToDisplay.currentFunding < projectToDisplay.fundingGoal) && (projectToDisplay.currentFunding > 0)){
      return "bg-warning";
    } else {
     return "bg-danger";
    }
  }

  donationSendComplete(projectToUpdate, userAmount) {
    if (userAmount < 0) {
      alert("Emezzlement is an actual illegal activity. Please don't.")
    } else {
      let reallyCurrentFunding: number = projectToUpdate.currentFunding;
      reallyCurrentFunding += parseInt(userAmount);
      var projectEntryInFirebase =
      this.projectService.getProjectById(projectToUpdate.$key);
      projectEntryInFirebase.update({currentFunding: reallyCurrentFunding});
      this.donateClicked = false;
    }
  }

  updateProject(newName, newLead, newDescription, newFundingGoal, newSwag, newBudgetDeets){
    if(newName && newLead && newDescription && newFundingGoal && newSwag && newBudgetDeets){
      this.projectService.updateProject(this.projectToDisplay, newName, newLead, newDescription, newFundingGoal, newSwag, newBudgetDeets);
    } else{
      alert("All fields must have value.");
    }
    this.editClicked = false;
  }

  beginDeletingProject() {
    if (confirm("Are you sure you hate Christmas?")) {
      this.projectService.deleteProject(this.projectToDisplay);
      this.router.navigate(['']);
    }
  }


}
