"use strict";

window.onload = function () {

    var quiz = {
        title: 'Find Your Ideal Wine',

        questions: [{
                text: "How would you describe how you feel about wine?",
                responses: [{
                        text: 'I’m open to anything that tastes good',
                        value: 'Chardonnay'
                    },
                    {
                        text: 'I enjoy drinking wine and have some favourites',
                        value: 'Merlot'
                    },
                    {
                        text: 'I never drink wine and dont think ill like it',
                        value: 'Cabernet Sauvignon'
                    }
                ]
            },
            {
                text: "If you could eat one kind of chocolate for the rest of your life, which would it be?",
                responses: [{
                        text: 'White chocolate',
                        value: 'Chardonnay'
                    },
                    {
                        text: 'Dark chocolate',
                        value: 'Merlot'
                    },
                    {
                        text: 'Milk chocolate',
                        value: 'Cabernet Sauvignon'
                    }
                ]
            },
            {
                text: "What kind of scents do you like?",
                responses: [{
                        text: 'Fruity/Berry scents',
                        value: 'Cabernet Sauvignon'
                    },
                    {
                        text: 'Earthy/woody scents',
                        value: 'Merlot'
                    },
                    {
                        text: 'Fresh/Citrus scents',
                        value: 'Chardonnay'
                    }
                ]
            },
            {
                text: "What kind of music would you want to listen to while drinking a glass of wine?",
                responses: [{
                        text: 'Classical',
                        value: 'Cabernet Sauvignon'
                    },
                    {
                        text: 'Jazz',
                        value: 'Merlot'
                    },
                    {
                        text: 'Electronic',
                        value: 'Chardonnay'
                    }
                ]
            },
            {
                text: "What entree would you prefer?",
                responses: [{
                        text: 'Steak',
                        value: 'Merlot'
                    },
                    {
                        text: 'Chicken',
                        value: 'Cabernet Sauvignon'
                    },
                    {
                        text: 'Fish',
                        value: 'Chardonnay'
                    }
                ]
            },
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function () {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function () {
                this.questionIndex--;
            },
            restart: function () {
                this.questionIndex = 0;
            },
            score: function () {
                //find the highest occurence in responses code credit: https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array/38846107
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}

function changeCenter(center) {
    map.setCenter(center);
    marker.setPosition(center);
}