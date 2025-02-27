<!-- pages/transcripts.vue -->

<template>
    <div class="transcripts-page">
      <h1>About the Project</h1>
      <p></p>
      <div class="about-content">
    <div class="about-section">
<h2>About the Project</h2>
<p>
Placing the Holocaust is an interdisciplinary project to share historical and geographical Holocaust data for research and teaching, funded by the National Endowment for the Humanities and participating institutions. The data are related to 1,075 SS-administered concentration camps and subcamps, as well as the six Nazi death camps; 1,142 ghettos in German-occupied Eastern Europe; and the experiences of individuals during the Holocaust, as recorded in 887 English-language post-war oral interviews. Although Placing the Holocaust makes a great deal of information available to users, it represents a fraction of survivor interviews and the information scholars have gathered about tens of thousands of sites of imprisonment, murder, and forced labor under the Nazi regime. This project is not meant to be comprehensive, but to provide representative data for researchers, teachers, and students who wish to understand the geographical dimensions of the Holocaust.  
</p>
<p>
When completed, Placing the Holocaust will be a public website that links the mapping platform to the testimony search platform. It will be possible to use either platform independently or to toggle between them, following the connections one finds between perpetrator sites and accounts of individuals’ experiences in those places. 
Dozens of people, including many student research assistants, have contributed to the project’s development since its beginnings at a research seminar at USHMM in 2007. See <a href="#project-staff" class="fade"><u>Project Staff</u></a>.
</p>
<br>
<h2>Funding</h2>
<p>
Funding for this project came from National Endowment for the Humanities Digital Advancement and Start-Up grants (award numbers HAA-287827-22, HAA-261290, and HE-248377-16); the University of Maine (Col. James C. McBride Fund, Dale Benson Gift Fund, Clement and Linda McGillicuddy Humanities Center, Faculty Research Fund, College of Liberal Arts and Sciences, History Department), Duke University, and Washington University in St. Louis Center for the Humanities. We also thank research colleagues at the United States Holocaust Memorial Museum for their ongoing support.
</p>
<br>
<h2 id="project-staff">Project Staff</h2>
<p>
The following individuals were involved in one or more of the NEH-funded projects that resulted in Placing the Holocaust. Research assistants are noted as RAs.
</p>

<p>
<u>University of Maine:</u>
<br>
Anne Kelly Knowles, Col. James C. McBride Distinguished Professor of History, founder of the Digital & Spatial History Lab – Principal investigator.  
<br>
<br>
Justus Hillebrand, doctoral RA and digital history consultant – data architect, data entry and proofing, SS camps and ghettos datasets.  
<br>
<br>
Maja Kruse – doctoral RA; built prototype mapping platforms; developed datasets for ghetto region boundaries and death camps; set standards for SS camps and ghettos gazetteers, built ghettos gazetteer, supervised camps gazetteer data entry; camps and ghettos data entry and proofing; mapped camps and ghettos data.  
<br>
<br>
Christine Liu – doctoral RA; developed transcripts methodology, place categories, training data, and platform with Dan Miller and William Mattingly; camps and ghettos data entry and proofing.  
<br>
<br>
Gregory Gaines – doctoral RA, transcripts team member, gazetteer data entry.  
<br>
<br>
Al Cedor – masters and undergraduate RA, ghettos data design testing, data entry and proofing.  
<br>
<br>
Dakota Gramour – master’s and undergraduate RA, ghettos data design, testing, and entry.  
<br>
<br>
Will Kochtitzky – masters RA, developed weather estimation model for Europe during World War II. 
<br>
<br>
Jakob Archer – undergraduate RA, camps gazetteer testing and data entry.  
<br>
<br>
Jeremy Braun – undergraduate RA, ghettos data analyst and visualizer.  
<br>
<br>
Jules Connolly – undergraduate RA, camps gazetteer data entry.  
<br>
<br>
Nick Dieffenbacher-Krall – undergraduate RA, camps gazetteer data entry, data analyst.  
<br>
<br>
Peter Murdock – undergraduate RA, camps gazetteer data entry.  
<br>
<br>
Katie Ritchie – undergraduate RA, McGillicuddy research fellow, camps gazetteer data entry.  
<br>
<br>
Caitlyn Rooms – undergraduate RA, ghettos data testing, testing, and entry.  
<br>
<br>
<br>

<u>Duke University:</u>  
<br>
<br>
Paul B. Jaskot, Professor of Art and Art History, director of Wired! the Duke Digital Art History and Culture Research Lab – co-PI for the Holocaust Ghettos Project, historical consultant, data design and data entry for SS camps and ghettos.  
<br>
<br>
Eve Duffy, Associate Vice Provost for Global Affairs, Professor of History – historical consultant, data entry and proofing for SS camps and ghettos.  
<br>
<br>
Antonio LoPiano – doctoral RA; ghettos data entry.  

<br>
<br>
<br>

<u>Washington University in St. Louis:</u>  
<br>
<br>
Anika Walke, George W. Lewis Career Development Professor, Professor of History; Women, Gender, and Sexuality Studies; Jewish, Islamic, and Middle Eastern Studies; and Global Studies – co-PI for the Holocaust Ghettos Project, historical consultant.  
<br>
<br>
Juana Torralbo-Higuera – doctoral RA, transcripts team member.
Nicci Mowszowski – undergraduate RA, ghettos data entry and proofing.  
<br>
<br>
<br>

<u>Consultants:</u>  
<br>
<br>
William Mattingly, programmer and natural language processing for transcripts platform.  
<br>
<br>
Dan Miller, Columbia University – website designer, platform design consultant, transcripts methodology and place category development.  
<br>
<br>
Levi Westerveld, Grid Arendal – transcripts methodology and place category development.
</p>



</div>
</div>
      <!-- Placeholder for transcript content -->
      <div class="transcript-content">
        <p></p>
        <!-- Links to individual transcripts can be added here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TranscriptsPage',
  }
  </script>
  
  <style scoped>
  .transcripts-page {
    text-align: center;
    padding: 20px;
  }
  
  .transcript-content {
    margin-top: 30px;
  }
  </style>
  