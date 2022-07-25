import cardFilds from "../components/cardFilds.js";

export default function playerService(list, data) {
    let res = false;

    list.forEach((element) => {
        if (!res) {
            res = cardFilds(element.number, data);
        } else {
            res += cardFilds(element.number, data);
        }
    });
    return res;
}
