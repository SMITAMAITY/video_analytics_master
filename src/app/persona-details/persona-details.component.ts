import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-details',
  templateUrl: './persona-details.component.html',
  styleUrl: './persona-details.component.css'
})
export class PersonaDetailsComponent implements OnInit {
  personalQu:string = ''
  userDetails:any =[]
  listofGoals:any=[];
  listofFru:any=[];
  bio : string = '' ;
  motivationList : any=[];
  channelList: any=[];
  InfList:any=[];
  personalityList:any=[];
  
  ngOnInit(): void {
    this.userDetails = [];
    this.userDetails.push({ Label: 'Age', value: '1-100' });
    this.userDetails.push({ Label: 'Work', value: 'Job Title' });
    this.userDetails.push({ Label: 'Family', value: 'Married, Kids, etc' });
    this.userDetails.push({ Label: 'Location', value: 'City, State' });
    this.userDetails.push({ Label: 'Character', value: 'Arch' });

    this.motivationList = [];
    this.motivationList.push({ Label: 'Incentive', score: 70 });
    this.motivationList.push({ Label: 'Fear', score: 50 });
    this.motivationList.push({ Label: 'Growth', score: 40 });
    this.motivationList.push({ Label: 'Power', score: 70 });
    this.motivationList.push({ Label: 'Social', score: 60 });

    this.channelList = [];
    this.channelList.push({ category: 'Traditional Ads', score: 20 });
    this.channelList.push({ category: 'Social Media', score: 70 });
    this.channelList.push({ category: 'Referral', score: 50 });

    this.InfList = [];
    this.InfList.push({ name: 'Elon Mask', Val: 'E' });
    this.InfList.push({ name: 'Mark Zuckerberg', Val: 'M' });
    this.InfList.push({ name: 'Sundar Pichai', Val: 'S' });

    this.personalityList = [];
    this.personalityList.push({ category: 'Extrovet' });
    this.personalityList.push({ category: 'Feeling' });
    this.personalityList.push({ category: 'Thinking'});
    this.personalityList.push({ category: 'Sensing'});
    this.personalityList.push({ category: 'Preceiving' });

    this.personalQu = '`A quotation that captures this user personality`'
    this.bio = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    this.listofGoals= [
        'Required Report Elements, When you create any type of report, you must include the following elements and attributes',
        'Query Portion of the List Report Sample,The query portion of the report defines the data in the report.',
        'Layout Portion of the List Report Sample,The layout portion of the report defines how the data appears in the report.'
    ]
    this.listofFru= [
      'Lorem Ipsum is simply dummy text of the printing and the a typesetting industry. ',
      'Contrary to popular belief, Lorem Ipsum is not simply the a random text. It has roots in a piece of classical Latin a literature from 45 BC, making it over 2000 years old.',
  ]
  }

}
