import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-details',
  templateUrl: './interaction-details.component.html',
  styleUrl: './interaction-details.component.css'
})
export class InteractionDetailsComponent implements OnInit {
  transcripts: any[] = [];
  customerSentimentData: any[] = [];
  chartData: any;
  chartOptions: any;
  todoList: any[] = [];
  meetingSummary: any[] = [];
  ngOnInit(): void {
    this.transcripts = [
      { time: '00:01', speaker: 'Abdul', text: 'I\'ve been thinking more about my overall financial situation and' },
      { time: '00:02', speaker: 'Abdul', text: 'I want to have a conversation about retirement planning, investment,' },
      { time: '00:03', speaker: 'Abdul', text: 'diversification and some personal interests I have, including my family' },
      { time: '00:05', speaker: 'Abdul', text: 'related business.' },
      { time: '00:06', speaker: 'Jacob', text: ' I am doing well.' },
      { time: '00:07', speaker: 'Jacob', text: ' Thank you for asking.' },
      { time: '00:07', speaker: 'Jacob', text: ' I am glad to you reached out to discuss these' },
      { time: '00:08', speaker: 'Jacob', text: ' important topics.' },
      { time: '00:09', speaker: 'Jacob', text: ' Let us dive into your overall financial plan and see' },
      { time: '00:10', speaker: 'Jacob', text: ' how we can best address your requirement, retirement goals, investments' },
      { time: '00:11', speaker: 'Jacob', text: ' objectives and other any other area of interest you would' },
      { time: '00:12', speaker: 'Jacob', text: ' like to explore.' },
      { time: '00:13', speaker: 'Abdul', text: 'Great.' },
      { time: '01:14', speaker: 'Abdul', text: 'Thank you.' },
      { time: '01:15', speaker: 'Abdul', text: 'So to start, I have been thinking a lot about' },
      {
        time: '01:00', speaker: 'Abdul', text: 'retirement lately and want to make sure I\'m on track'
      },       
      { time: '01:10', speaker: 'Abdul', text: 'to retire comfortable comfortably.' },
      { time: '01:10', speaker: 'Abdul', text: 'Can we review my investment savings and see if there' },
      { time: '01:10', speaker: 'Abdul', text: 'are any adjustments we need to make?' },
      { time: '01:10', speaker: 'Jacob', text: ' Absolutely.' },
      { time: '01:10', speaker: 'Jacob', text: ' Retirement planning is crucial aspect of your financial future.' },
      { time: '01:10', speaker: 'Jacob', text: ' We will review our current retirement savings, projected expenses in' },
      { time: '01:10', speaker: 'Jacob', text: ' retirement and any other factors that may impact your retirement' },
      { time: '01:10', speaker: 'Jacob', text: ' readiness.' },
      { time: '02:10', speaker: 'Jacob', text: ' Based on our analysis, we can develop a comprehensive retirement' },
      { time: '02:10', speaker: 'Jacob', text: ' plan.' },
      { time: '02:10', speaker: 'Jacob', text: ' Tailor to your goal and lifetime timeline.' },
      { time: '02:10', speaker: 'Abdul', text: 'That sounds reassuring.' },
      { time: '02:10', speaker: 'Abdul', text: 'I also want to discuss investment diversification.' },
      { time: '02:10', speaker: 'Abdul', text: 'Well, while I have some investments already, I want to' },
      { time: '02:10', speaker: 'Abdul', text: 'make sure My Portfolio is well diversified and aligned with' },
      { time: '02:10', speaker: 'Abdul', text: 'my risk tolerance.' },
      { time: '02:10', speaker: 'Abdul', text: 'Can we review my investments and explore opportunities for diversification?' },
      { time: '02:10', speaker: 'Jacob', text: ' Of course, diversification is a key to manage risk and' },
      { time: '02:10', speaker: 'Jacob', text: ' achieving long term financial growth.' },
      { time: '02:10', speaker: 'Jacob', text: ' We will review our current investment portfolio, assess your risk' },
      { time: '02:10', speaker: 'Jacob', text: ' tolerance, and explore opportunities to diversify across asset classes, industries,' },
      { time: '03:10', speaker: 'Jacob', text: ' and geographic regions.' },
      { time: '03:10', speaker: 'Jacob', text: ' By spreading your investment across a variety of assets, we' },
      { time: '03:10', speaker: 'Jacob', text: ' can help mitigate risk and maximize potential returns over time.' },
      { time: '03:10', speaker: 'Abdul', text: 'That\'s exactly what I\'m looking for.' },
      { time: '03:10', speaker: 'Abdul', text: 'I also have some personal interest outside of traditional investments,' },
      { time: '03:10', speaker: 'Abdul', text: 'including my family related business.' },
      { time: '03:10', speaker: 'Abdul', text: 'Can we discuss how we can integrate that into my' },
      { time: '03:10', speaker: 'Abdul', text: 'overall financial plan?' },
      { time: '03:10', speaker: 'Jacob', text: ' Absolutely.' },
      { time: '03:10', speaker: 'Jacob', text: ' Incorporating your financial, your family related business into your financial' },
      { time: '03:10', speaker: 'Jacob', text: ' plan adds another dimension to our strategy.' },
      { time: '03:10', speaker: 'Jacob', text: ' We will review the details of your business asset, assess' },
      { time: '03:10', speaker: 'Jacob', text: ' its financial performance and potential impact on your overall portfolio,' },
      { time: '03:10', speaker: 'Jacob', text: ' and explore ways to optimize its contribution to your financial' },
      { time: '03:10', speaker: 'Jacob', text: ' goals.' },
      {
        time: '03:10', speaker: 'Jacob', text: ' Whether it\'s through strategic investment, succession planning or other strategies, '
      },
      { time: '04:01', speaker: 'Jacob', text: ' we will work together to ensure your family business align' },
      { time: '04:01', speaker: 'Jacob', text: ' with your broader financial objectives.' },
      { time: '04:02', speaker: 'Abdul', text: 'I feel confident knowing that we will be talking a' },
      { time: '04:03', speaker: 'Abdul', text: 'lot, talking a holistic progress to my financial plan.' },
      { time: '04:04', speaker: 'Jacob', text: ' It is my pleasure, Abdul.' },
      { time: '04:05', speaker: 'Jacob', text: ' Building a strong financial foundation requires A comprehensive approach that' },
      { time: '04:06', speaker: 'Jacob', text: ' takes into account all aspects of your financial life.' },
      { time: '04:07', speaker: 'Jacob', text: ' I am here to support you every step of the' },
      { time: '04:08', speaker: 'Jacob', text: ' way and help you achieve your goal.' },
      {        
        time: '04:10', speaker: 'Abdul', text: 'I\'m grateful, grateful for your expertise and guidance.'
      },       
      { time: '04:11', speaker: 'Abdul', text: 'I look forward, forward to work together to create a' },
      { time: '04:12', speaker: 'Abdul', text: 'plan that sets up my sets up for a secure' },
      { time: '04:13', speaker: 'Abdul', text: 'and willing full financial future.' },
      {        
        time: '04:15', speaker: 'Jacob', text: ' Likewise, let\'s continue working together to make your financial goal'
      },       
      { time: '04:16', speaker: 'Jacob', text: ' a reality and ensure your Peace of Mind both now' },
      { time: '04:20', speaker: 'Jacob', text: ' and in the years to come.' },
    ];

    //for (var i = 0; i < 100; i++) {
    //let datetime = new TimeRanges
    //}

    this.customerSentimentData = [];
    this.customerSentimentData.push({ category: '401K', score: 80, color:'limegreen' });
    this.customerSentimentData.push({ category: 'Municipal Bonds', score: 60, color: 'goldenrod' });
    this.customerSentimentData.push({ category: 'Roth IRA', score: 50, color: 'goldenrod' });
    this.customerSentimentData.push({ category: 'Tax loss harvesting', score: 30,color: 'red' });    
    this.customerSentimentData.push({ category: 'Tax-Managed Funds', score: 70, color: 'limegreen' });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartData = {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.chartOptions = {
      cutout: '60%',
    };

    this.todoList.push({ action: 'complete', description: 'Review Abdul\'s current financial situation and tax profile ' });
    this.todoList.push({ action: 'complete', description: 'Gather details about Abdul\'s income sources, investments and deductions or credits he typically claims.' });
    this.todoList.push({ action: 'complete', description: 'Maximizing Abdul\'s contribution to tax advantage retirement accounts such as 401K or IRA to reduce her taxable income.' });
    this.todoList.push({ action: 'complete', description: 'Explore other retirement account options such as Roth IRA, depending on Abdul\'s tax bracket and financial goals.' });
    this.todoList.push({ action: 'complete', description: 'Consider tax loss harvesting by reviewing Abdul\'s investment portfolio and identifying oppurtunities to offset capital gains with losses.' });
    this.todoList.push({ action: 'complete', description: 'Explore tax-efficient investment strategies such as investing in municipal bonds or tax-managed funds.' });
    this.todoList.push({ action: 'complete', description: 'Adjusting strategies as Abdul\'s life circumstances change to maximize tax efficiency and help him acheive long-term financial objectives.' });


    this.meetingSummary.push('Abdul Shaikis meeting with agent Jacob Jones to discuss optimizing her tax with her financial plan.');
    this.meetingSummary.push('Abdul wants to maximize opportunities to minimize her tax liability as the tax season approaches.');
    this.meetingSummary.push('Jacob suggests starting by reviewing Abdul\'s current financial situation and tax profile.');
    this.meetingSummary.push('Abdul provides details about her income, sources, investments, deductions, and credits');
    this.meetingSummary.push('Jacob suggests maximizing contributions to tax advantage retirement accounts like 401K or IRA to reduce taxable income and lower the tax bill');
    this.meetingSummary.push('Jacob suggests Another strategy is tax loss harvesting, which involves selling investments that have experienced a loss to offset capital gain and reduce tax liability');
    this.meetingSummary.push('Jacob willmonitor Abdul\'s investment portfolio throughout the year and take advantage of opportunities for tax loss harvesting.');
    this.meetingSummary.push('They can also explore other tax - efficient investment strategies such as investing in municipal bonds or tax - managed funds.');
    this.meetingSummary.push('The goal is to optimize Abdul\'s taxes and potentially save money.');
    this.meetingSummary.push('Tax optimization is an ongoing process that will be adjusted as AbdulI \'s life circumstances change.');
    this.meetingSummary.push('Jacob is excited to help Abdul navigate the complexities of the tax code and create a plan that puts her in the best possible financial position.');
  }
  

}
