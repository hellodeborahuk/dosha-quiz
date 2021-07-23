# Creating a Dosha Quiz

First up I created a design for the dosha quiz in Figma: https://www.figma.com/file/ZunMd3aIgTKHU4vtnyq3j8/Dosha-Quiz?node-id=0%3A1 and found a colour scheme I liked the look of: https://coolors.co/d65ba6-c36fdc-383d6e-4b5395-6ccff6

I wanted a quiz where when you select an option, it would automatically move you forward to the next question. 

# Stumbling blocks

To get the initial design and questions up was relatively straightforward. Where I got stuck was with trying to count how many of each button had been clicked (a, b or c). Whichever had the most clicks was the answer. I reached out to the community for some guidance and was given some direction which helped me figure out how to do this. I filtered the results array and used the length of the filtered array to count the a, b and c's. To work out which was clicked the most I used if statements.

# Further development

I want to create a pie chart with results in to show what percentage of each dosha someone is.