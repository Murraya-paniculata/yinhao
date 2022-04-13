const appkey = "demo13_1545210570249";
const url = "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey

export async function fetchAllStudents() {
    const stus = await fetch(url)
    .then((resp) => resp.json()).then(resp => resp.data)
    return stus;
}