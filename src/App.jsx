import React from 'react'
import Card from './assets/component/card'
const App = () => {

   const jobsData = [
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
    companyName: "Google",
    designation: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mountain View, USA",
    postedDate: "3 days ago"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/024/983/621/non_2x/microsoft-logo-transparent-free-png.png",
    companyName: "Microsoft",
    designation: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Redmond, USA",
    postedDate: "1 week ago"
  },
  {
    companyLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    designation: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Seattle, USA",
    postedDate: "2 days ago"
  },
  {
    companyLogo: "https://as1.ftcdn.net/v2/jpg/04/66/28/86/1000_F_466288694_2H2El7KCScdhvQgIV89spc9Ynmg9EqfD.jpg",
    companyName: "Meta",
    designation: "React Native Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Menlo Park, USA",
    postedDate: "5 days ago"
  },
  {
    companyLogo: "https://th.bing.com/th/id/R.f5dee355f4f20bdf069c95b7787f1525?rik=JVwomDZ2WeXJoQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Sf4sPT42qCA%2fUM4IxB3MzFI%2fAAAAAAAABlg%2f8GIO3ApcVQY%2fs1600%2fapple%2blogo%2bpng.png&ehk=rp84aXAhwqcAhrGIZ8pBqHQYbm85eFZWRxJ%2b6%2bRZLkA%3d&risl=&pid=ImgRaw&r=0",
    companyName: "Apple",
    designation: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Cupertino, USA",
    postedDate: "1 day ago"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/020/190/686/original/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    designation: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
    postedDate: "4 days ago"
  },
  {
    companyLogo: "https://i.pinimg.com/originals/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg",
    companyName: "Oracle",
    designation: "Database Administrator",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Austin, USA",
    postedDate: "6 days ago"
  },
  {
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.YCCy8Ob2YPd5N2BA0JUFwQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "IBM",
    designation: "AI Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "New York, USA",
    postedDate: "2 weeks ago"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
    companyName: "Tesla",
    designation: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$68/hr",
    location: "Palo Alto, USA",
    postedDate: "7 days ago"
  },
  {
    companyLogo: "https://tse2.mm.bing.net/th/id/OIP.kCHe1JqU6HKFXXo3xJp-ZgHaF3?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    designation: "UI/UX Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "San Jose, USA",
    postedDate: "3 weeks ago"
  }

   ];
    console.log(jobsData); 

return (
  <div className="parent">
{jobsData.map(function(elem){
  return < Card company={elem.companyName} post={elem.designation} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} 
  logo = {elem.companyLogo} postDate={elem.postedDate} />
})}

  </div>
)
   

}

export default App