// https://observablehq.com/@ihsankahveci/sermons@769
import define1 from "./26670360aa6f343b@199.js";
import define2 from "./a2166040e5fb39a6@229.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["sermons (1).csv",new URL("./files/3ed67b3bb6bb6b1b22db413ea2bdf7077db1fc23477d970c2ab674652dba6bf450644fc91d1a6002b67ff1aeee034c243b6ff47e40c6c200840eca918d8f5b4a",import.meta.url)],["image.png",new URL("./files/0807f3d419799cc166ad6dd2ad87850a76036ce23c15da3a8427eda97077d4a11aef6e5c67a22960200e83b3c5ed2e6d2aa596b2382c0bac92c55adb55ab5df5",import.meta.url)],["000052.png",new URL("./files/d5552cc5823ab908b0e3bb5ab3cfa5f865704e4f46ca702f9f7d76229f37f5e990b622e77b309034e8a6a4688ef0d091151b5bce5a20084a2e6d61392e8d0683",import.meta.url)],["000057.png",new URL("./files/6b3ae1b694867f0c89fc25916d6e896add41a594d7043d684250572c4156c76a767e07c8ed93e4270dd0c3f54ea55663c432a96f74a2afeed28228d6738bcd07",import.meta.url)],["nationalism.csv",new URL("./files/91ea6e7455862bd34585c70fa51624ae980797e009e50af515c8e4aec1ceacffefcfd8e8b13d4e6cb1b53f4487273ca8f8a747775d9d431d1dab90d229af2e1b",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Pulse of a nation?: How does weekly religious sermons reflect socioeconomic events in Turkey?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Overview
Weekly religious sermons are significant texts that reflect and shape the political atmosphere and socioeconomic trends in Turkey, owing to the fact that they are centrally composed and widely disseminated through mosques across the country. With this project, we aim to create an interactive tool for the exploration of sermon content which allows for both examining individual documents and gaining insights about trends over time. We are going to focus on some of the most interesting recurring themes and topics in sermons, such as nationalism, that our structural topic model discovered and juxtapose their occurrence in sermons with real-life socio-political events and economic data. Encoding information about topics and events using various channels, we will design different views to facilitate simultaneous exploration of multiple topics and support our visualizations with contextual and background providing annotations. To provide a venue for exploration of the keywords representative of our selected topics, we are going to utilize methods similar to word clouds and visualize the saliency of keywords in sermon corpora.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Note: We have discovered that mouse-hover tooltips seem to occasionally freeze in Google Chrome but viewing experience should be perfectly smooth in Safari`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Data and Methods
This dataset includes weekly sermons between 2005-2020, a total of 1104. The sermons are collected from various archives: DIB’s website, local religious institutions, DIB’s monthly periodicals. They are all digitized and translated into English. Another data source is Uppsala Conflict Data Program event data on the Kurdish-Turkish conflict. We used proxy measurement, the number of casualties from both Turkish and Kurdish parties, to analyze the conflict’s impact on the nationalist discourse. 
We used Structural Topic Modelling (Roberts et al. 2017) to distinguish multiple uses of nationalist discourse and trace them over time. We also have hand-coded a sample of sermons and compared the qualitative findings with the computational method to verify my results. Other data on Turkey currently include the monthly unemployment rate, head of DIB, and temporal variables (religious events, yearly fixed-effects). Using this approach allowed us to visualize changing the use of nationalist discourse over the years.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Word cloud for most frequent words in the sermon corpora**`
)});
  main.variable(observer()).define(["html","FileAttachment"], async function(html,FileAttachment){return(
html`<img src="${await FileAttachment("image.png").url()}" height=600"/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Word cloud visualizing the frequency of most common words in the sermon corpora. Larger font size and darker shades of red indicate higher frequency.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Frequencies of most common words in the sermon corpora**`
)});
  main.variable(observer()).define(["html","FileAttachment"], async function(html,FileAttachment){return(
html`<img src="${await FileAttachment("000057.png").url()}" height=600"/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Number of apperances, denoted as "frequency", for the most common words in the sermon corpora.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Relative frequencies of keywords for each topic**`
)});
  main.variable(observer()).define(["html","FileAttachment"], async function(html,FileAttachment){return(
html`<img src="${await FileAttachment("000052.png").url()}" height=600"/>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`RELATIVE FREQ PLOT DESCRIPTION`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<iframe width="100%" height="635" frameborder="0"
  src="https://gibbsg.github.io/512-A3-Pulse-of-a-nation-How-does-weekly-religious-sermons-reflect-socioeconomic-events-in-Turkey/"></iframe>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`X-axis is fixed to date variable and Y-axis shows the prevalence of selected topic in sermons. Source code and a more detailed explanation of this visualization can be found [here on Github](https://github.com/cse512-21s/A3-Pulse-of-a-nation-How-does-weekly-religious-sermons-reflect-socioeconomic-events-in-Turkey).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Quarterly average topic prevalence for nationalism in sermons and Turkish casualties, 2004-2020**`
)});
  main.variable(observer("viewof barchart_variable")).define("viewof barchart_variable", ["Inputs"], function(Inputs){return(
Inputs.select(["turkish","kurdish"], {value: "turkish", label: "bar chart variable"})
)});
  main.variable(observer("barchart_variable")).define("barchart_variable", ["Generators", "viewof barchart_variable"], (G, _) => G.input(_));
  main.variable(observer("viewof topics")).define("viewof topics", ["Inputs"], function(Inputs){return(
Inputs.select(["nationalism","kurdish"], {value: "nationalism", label: "Topics for the Prevalance value"})
)});
  main.variable(observer("topics")).define("topics", ["Generators", "viewof topics"], (G, _) => G.input(_));
  main.variable(observer()).define(["vl","sermons","barchart_variable","topics"], function(vl,sermons,barchart_variable,topics)
{
  const prevalance = vl.markLine({strokeWidth: 2, opacity: 1, interpolate: 'monotone', color:"darkred"})                              
  .encode(
    vl.x().fieldN("quarter"),
    vl.y().average("prevalance").axis({ format: "%","titleColor": "darkred"}).title("Avg. Topic Prevalance (Nationalism)") 
  );
  
  const cardi = vl.markBar({ color:"#85A9C5"})                 
  .data(sermons)    
  .encode(
    vl.x().fieldN("quarter"), 
    vl.y().average(barchart_variable).title("Avg. "+ barchart_variable + " Casualities").axis({"titleColor": "#85A9C5"})          
  );
  
  return vl.layer(cardi,prevalance)
    .data(sermons)
    // .transform([vl.filter('datum.topic == nationalism')] )
    .transform([vl.filter('datum.topic == "'+ topics +'"')] )
    .resolve({scale: {y: 'independent'}}) // resolve to independent y channel scales
    .width(700)
    .height(200)
    .render();

}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Quarterly average topic prevalence for nationalism in percentages denoted by the red line (left y-axis) by  and count of quarterly Turkish casualties denoted by blue bars (right y-axis). Nationalism appears to be more prevalent in sermons during periods when the conflict intensifies. Cyclical (quarterly) variations in the prevalence of nationalism corresponds to national days.`
)});
  main.variable(observer()).define(["vl","sermons"], function(vl,sermons)
{
  const prevalance = vl.markBar({ color:"#85A9C5"})                              
  .encode(
    vl.x().fieldN("quarter"),
    vl.y().average("prevalance").axis({ format: "%","titleColor": "#85A9C5" }).title("Avg. of topic prevalance (nationalism)") 
  );
  
  const cardi = vl.markLine({strokeWidth: 2, opacity: 1, interpolate: 'monotone', color:'darkred'})                 
  .data(sermons)    
  .encode(
    vl.x().fieldN("quarter"), 
    vl.y().average("turkish").title("Avg. turkish casualities").axis({"titleColor": "darkred"})                
  );
  
  return vl.layer(prevalance, cardi)
    .data(sermons)
    .transform([vl.filter('datum.topic == "nationalism"')] )
    .resolve({scale: {y: 'independent'}}) // resolve to independent y channel scales
    .width(700)
    .height(200)
    .render();

}
);
  main.variable(observer()).define(["vl","nationalism"], function(vl,nationalism)
{
  const prevalance = vl.markBar({ color:"#85A9C5"})                              
  .encode(
    vl.x().fieldT("month"),
    vl.y().average("prevalance").axis({ format: "%","titleColor": "#85A9C5" })
  );
  
  const cardi = vl.markLine({strokeWidth: 2, opacity: 1, interpolate: 'monotone', color:'darkred'})                 
  .encode(
    vl.x().fieldT("month"), 
    vl.y().average("unemployment").axis({"titleColor": "darkred"})               
  );
  
  return vl.layer(prevalance, cardi)
    .data(nationalism)
    // .transform([vl.filter('datum.topic == "nationalism"')] )
    .resolve({scale: {y: 'independent'}}) // resolve to independent y channel scales
    .width(700)
    .height(200)
    .render();

}
);
  main.variable(observer()).define(["vl","nationalism"], function(vl,nationalism)
{
  const prevalance = vl.markBar({ color:"#85A9C5"})                              
  .encode(
    vl.x().fieldT("month"),
    // vl.y().average("prev_change").axis({ format: "%" ,"titleColor": "#85A9C5" })
    vl.y().average("unemp_change").axis({"titleColor": "#85A9C5"})  
  );
  
  const cardi = vl.markLine({strokeWidth: 2, opacity: 1, interpolate: 'monotone', color:'darkred'})                 
  .encode(
    vl.x().fieldT("month"), 
    // vl.y().average("unemp_change").axis({"titleColor": "darkred"})  
    vl.y().average("prev_change").axis({ format: "%" ,"titleColor": "darkred" })
  );
  
  return vl.layer(prevalance, cardi)
    .data(nationalism)
    // .transform([vl.filter('datum.topic == "nationalism"')] )
    .resolve({scale: {y: 'independent'}}) // resolve to independent y channel scales
    .width(700)
    .height(200)
    .render();

}
);
  main.variable(observer()).define(["vl","nationalism"], function(vl,nationalism)
{
  const prevalance = vl.markBar({ color:"#85A9C5"})                              
  .encode(
    vl.x().fieldT("month"),
    vl.y().average("prev_change").axis({ format: "%" ,"titleColor": "#85A9C5" })

  );
  
  const cardi = vl.markLine({strokeWidth: 2, opacity: 1, interpolate: 'monotone', color:'darkred'})                 
  .encode(
    vl.x().fieldT("month"), 
    vl.y().average("unemp_change").axis({"titleColor": "darkred"})  

  );
  
  return vl.layer(prevalance, cardi)
    .data(nationalism)
    // .transform([vl.filter('datum.topic == "nationalism"')] )
    .resolve({scale: {y: 'independent'}}) // resolve to independent y channel scales
    .width(700)
    .height(200)
    .render();

}
);
  main.variable(observer()).define(["md"], function(md){return(
md`# Appendix`
)});
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  const child2 = runtime.module(define2);
  main.import("printTable", child2);
  main.variable(observer("sermons")).define("sermons", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("sermons (1).csv").csv()
)});
  main.variable(observer()).define(["printTable","sermons"], function(printTable,sermons){return(
printTable(sermons.slice(20, 30))
)});
  main.variable(observer("nationalism")).define("nationalism", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("nationalism.csv").csv()
)});
  main.variable(observer()).define(["printTable","nationalism"], function(printTable,nationalism){return(
printTable(nationalism.slice(20, 30))
)});
  return main;
}
