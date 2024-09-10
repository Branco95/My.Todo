
//returning date in the format of dd/mm/yyyy at hh:mm
export function formatDate(): string {
    let d = new Date();
    let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();

    let date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " at " + d.getHours() + ":" + minutes;

    return date;
}

