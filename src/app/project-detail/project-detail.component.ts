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
projectToDisplay;
projectId;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private projectService:ProjectService) { }

  ngOnInit(){
    console.log("initializing");
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;
      console.log(this.projectToDisplay);
    });
  }



}
