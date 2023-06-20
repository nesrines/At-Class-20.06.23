//Task-1
let isPalindrome = string => {
    if(typeof(string) === "string") {
        if (string === "ata") return "Ata muqeddesdir!";
        let chars = string.split("");
        for (let i = 0; i < Math.trunc(chars.length / 2); i++) {
            if (chars[i] != chars[chars.length - 1 - i]) return false;
        }
        return true;
    }
}
console.log(isPalindrome("kjhgfdsasdfghjk"))

//Task-2
let btns = document.querySelectorAll("button");
for(let btn of btns) {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
    })
}