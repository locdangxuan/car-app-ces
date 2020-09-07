const base64Converter = (file) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = (error) => reject(error);
    });

const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    let i = 1950;
    while (i <= currentYear) {
        years.push(i);
        i += 1;
    }
    return years;
};

export default { base64Converter, getYears };
