import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";


const movieState = () => {
    return [
        {
            title: "The Athlete",
            mainImg: athlete,
            secondaryImg: athlete2,
            url: "/work/the-athlete",
            awards: [
                {
                    title: "Truly A Masterpiece",
                    description: 
                    "Lorem Ipsum is simply dummy text of the print"
                },
                {
                    title: "Fresh look on a brutal sport",
                    description:
                    "Lorem Ipsum is simply dummy text of the print print",
                },
                {
                    title: "It's okay lmao",
                    description: "Lorem Ipsum is simply dummy text of the print print print"
                }
            ]
        },
        {
            title: "Good Times",
            mainImg: goodtimes,
            url: "/work/good-times",
            secondaryImg: goodtimes2,
            awards: [
                {
                    title: "Truly A Masterpiece",
                    description: 
                    "Lorem Ipsum is simply dummy text of the print"
                },
                {
                    title: "Fresh look on a brutal sport",
                    description:
                    "Lorem Ipsum is simply dummy text of the print print",
                },
                {
                    title: "It's okay lmao",
                    description: "Lorem Ipsum is simply dummy text of the print print print"
                }
            ]
            
        },
        {
            title: "The Racer",
            mainImg: theracer,
            url: "/work/the-racer",
            secondaryImg: theracer2,
            awards: [
                {
                    title: "Truly A Masterpiece",
                    description: 
                    "Lorem Ipsum is simply dummy text of the print"
                },
                {
                    title: "Fresh look on a brutal sport",
                    description:
                    "Lorem Ipsum is simply dummy text of the print print",
                },
                {
                    title: "It's okay lmao",
                    description: "Lorem Ipsum is simply dummy text of the print print print"
                }
            ]
            
        },
        
    ]
}

export default movieState;