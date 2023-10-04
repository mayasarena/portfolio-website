import React from 'react'
import headerimg from '../assets/study_tracker_proj.png';
import prototype from '../assets/prototype.png';
import timerpage from '../assets/timerpage.png';
import histpage from '../assets/histpage.png';
import tagpage from '../assets/tagpage.png';
import chartspage from '../assets/chartspage.png';
import thematic from '../assets/themanalysis.png';

const StudyTrackerDetails = () => {
  return (
    <div className="bg-gradient-to-r from-purple to-blue">
        <div className="w-full overflow-hidden flex justify-center items-center m-auto bg-lightgray">
            <img className="h-96 md:h-auto" src={headerimg} alt="Header Image" />
        </div>
        <div className="md:w-11/12 lg:w-4/6 xl:w-1/2 flex flex-col p-10 gap-16 m-auto">
            <div className="text-white text-2xl font-bold">
            Exploring the Effects of a Quantified Self Application on Academic Procrastination and Study Habits in University Students
            </div>
            <div className="flex text-white gap-5 justify-center">
                <div className="flex flex-col gap-2">
                    <div className="font-mono text-xs">
                        PROJECT TYPE
                    </div>
                    <div>Master's Thesis</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-mono text-xs">
                        DURATION
                    </div>
                    <div>May 2022 — Aug 2023, 16 Months</div>
                </div>
                <div className="basis-1/4 flex flex-col gap-2">
                    <div className="font-mono text-xs">
                        METHODS
                    </div>
                    <div>Literature Review, Usability Study, Semi-Structured Interviews</div>
                </div>
                <div className="basis-1/4 flex flex-col gap-2">
                    <div className="font-mono text-xs">
                        KEY SKILLS
                    </div>
                    <div>Prototyping, User Research, Qual + Quant Analysis</div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    OVERVIEW
                </span>
                <span className="text-2xl text-white font-bold">
                    Problem Statement
                </span>
                <span className="text-white">
                    A big issue that University students deal with is procrastination. However, 
                    currently available interventions for procrastination can be expensive and time-consuming. 
                    Therefore, <b>I aimed to discover if tracking study time with the help of technology can help improve
                    study behaviour and decrease procrastination.</b>
                </span>
                <span className="text-2xl text-white font-bold">
                    Research Process
                </span>
                <div className="flex gap-4 md:gap-24">
                    <div className="flex flex-col text-white font-mono text-sm gap-3">
                        <span>1. Identify the Problem</span>
                        <span>2. Literature Review</span>
                        <span>3. Prototype</span>
                        <span>4. Usability Study</span>
                    </div>
                    <div className="flex flex-col text-white font-mono text-sm gap-3">
                        <span>5. Implement</span>
                        <span>6. Pilot Study</span>
                        <span>7. Analyze Data</span>
                        <span>8. Iterate on App</span>
                    </div>
                    <div className="flex flex-col text-white font-mono text-sm gap-3">
                        <span>9. Main Study</span>
                        <span>10. Analyze Data</span>
                        <span>11. Write Report</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    PROTOTYPE
                </span>
                <span className="text-2xl text-white font-bold">
                    Design Process
                </span>
                <span className="text-white mb-5">
                    The prototype was inspired by currently available productivity tracking apps on the market. <b>No gamified or 
                    social features were added</b>, because the study aimed to solely explore how self-tracking features impact procrastination. 
                    The final high-fidelity Figma prototype is shown below:
                </span>
                <img src={prototype} alt="Prototype" className="rounded-lg"/>
                <span className="text-2xl text-white font-bold">
                    Usability Study
                </span>
                <span className="text-white mb-5">
                    The purpose of the usability study was to evaluate the usability of the application and to identify areas for 
                    improvement. 8 participants aged 21 to 30 years old were recruited. Participants were instructed to think out loud 
                    as they performed tasks in the high-fidelity Figma prototype, and then filled out the System Usability Scale. 
                    <b> The resulting average SUS score was 83.75.</b>
                </span>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    THE STUDYTRACKER APP
                </span>
                <span className="text-2xl text-white font-bold">
                    Implementation
                </span>
                <span className="text-white mb-5">
                    I implemented StudyTracker using <b>SwiftUI</b> and it was compatible with iOS 15.0+. Users were able to time their study sessions using 
                    the timer on the homepage. There was also a history section that allowed users to edit or delete previous sessions. The app featured tags
                    so users can tag each study session as a different subject. Finally, the app provided feedback about study time in the form of text and charts.
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div><img src={timerpage} alt="Timer Page" className="h-auto max-w-full rounded-lg"/></div>
                    <div><img src={histpage} alt="History Page" className="h-auto max-w-full rounded-lg"/></div>
                    <div><img src={tagpage} alt="Tag Page" className="h-auto max-w-full rounded-lg"/></div>
                    <div><img src={chartspage} alt="Charts Page" className="h-auto max-w-full rounded-lg"/></div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    PILOT STUDY
                </span>
                <span className="text-2xl text-white font-bold">
                    Procedure
                </span>
                <span className="text-white mb-5">
                    The purpose of the pilot study was to ensure that the application was bug-free and to receive initial feedback. I aimed to explore
                    several research questions:
                </span>
                <div className="flex flex-col text-white font-mono text-sm gap-3 -mt-5">
                        <span>1. What are students' thoughts on the developed application?</span>
                        <span>2. How does the app impact students' study behaviour?</span>
                        <span>3. How can the app be improved?</span>
                    </div>
                <span className="text-white mb-5">
                    7 participants aged 18 to 51 years old were recruited for the study. Participants first filled out a pre-study demographics survey, then used the developed application for 10 days. 
                    After the 10 days, I conducted semi-structured interviews over Zoom about their experiences using the app.
                </span>
                <span className="text-2xl text-white font-bold">
                    Results
                </span>
                <span className="text-white mb-5">
                    The interview transcripts were analyzed using thematic analysis with an inductive approach. The 4 main themes that emerged are described below:
                </span>
                <div className="flex flex-col text-white gap-3 -mt-5">
                    <span><b>Improvement in Study Behaviour: </b>Participants saw an improvement in their focus, time management, and accountability.</span>
                    <span><b>Invoked Positive Feelings: </b>Using the app invoked positive feelings such as enjoyment and a sense of accomplishment.</span>
                    <span><b>Satisfaction With the App: </b>Participants were generally satisfied with the app.</span>
                    <span><b>Design Suggestions: </b>Participants had difficulties with tracking and difficulties with data interpretation.</span>
                </div>
                <span className="text-white mb-5">
                    The app was iterated on in preparation for the main study. From the pilot study feedback, <b>I added an explanation to each chart and a notification that informs the user if the timer has been running for awhile</b>, along with some other small changes.
                </span>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    MAIN STUDY
                </span>
                <span className="text-2xl text-white font-bold">
                    Procedure
                </span>
                <span className="text-white mb-5">
                    The purpose of the main study was to explore if the app had a positive impact on procrastination and study habits. I performed a 6-week randomized controlled trial with 9 participants in each group, where the experimental group used the app and the control group did not use the app.
                    Each group responded to an initial and final procrastination questionnaire, along with weekly procrastination questionnaires to assess any subtle changes.
                </span>
                <div className="flex flex-col text-white font-mono text-sm gap-3 -mt-5">
                        <span>H1: The participants in the experimental group will experience a significantly greater decrease in procrastination scores than the participants in the control group.</span>
                        <span>RQ1: How does the app impact students' study behaviours?</span>
                        <span>RQ2: How do students interact with and interpret their study data?</span>
                    </div>
                <span className="text-2xl text-white font-bold">
                    Qualitative Results
                </span>
                <img src={thematic} alt="Thematic Analysis" className="rounded-lg"/>
                <span className="text-white mb-5">
                    The interview transcripts were analyzed using thematic analysis with an inductive approach. The 4 main themes that emerged are described below:
                </span>
                <div className="flex flex-col text-white gap-3 -mt-5">
                    <span><b>Time Perception: </b>Participants better perceived the passage of time, leading them to gain motivation and a sense of accomplishment.</span>
                    <span><b>Remaining Focused on Studies: </b>The app helped participants remain focused on studies by acting as a reminder to study, helping them study for longer periods of time, or getting them into a “study mindset”.</span>
                    <span><b>Improved Time Management: </b>Participants were able to improve their time management by analyzing information in the charts.</span>
                    <span><b>Data is Not Enough: </b>Data is not enough to help participants reduce procrastination.</span>
                    <span><b>Application Design: </b>Participants would forget to start the timer and they found the application boring.</span>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-pink font-sm font-bold font-mono -mb-2">
                    CONCLUSIONS
                </span>
                <span className="text-2xl text-white font-bold">
                    Reflection
                </span>
                <span className="text-white mb-5">
                    Due to lack of participants, it was difficult to conclude whether or not the application had an impact on procrastination habits. In fact, statistical analysis showed that <b>the control group experienced a greater decrease in procrastination scores than the experimental group</b>.
                    Perhaps the app was not engaging enough, or consistently tracking study sessions is too much of a burden on students. Overall, self-tracking applications may be able to help students with procrastination and study habits however <b>additional persuasive features are needed to keep users engaged.</b>
                </span>
            </div>
        </div>
    </div>
  )
}

export default StudyTrackerDetails