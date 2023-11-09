let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let ColArr = await getColleges(country);
    showColArr(ColArr);
})
function showColArr(ColArr) {
    let list = document.querySelector("#list")
    for (colList of ColArr) {
        console.log(colList.name);
        let li = document.createElement("li");
        li.innerText = colList.name;
        list.appendChild(li);
    }

}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}