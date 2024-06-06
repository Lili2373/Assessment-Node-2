function timeToWords(time) {
    const hours = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'noon'
    ];
    const minutes = [
        'oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
        'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
    ];

    const [hour, minute] = time.split(':').map(Number);
    const period = hour < 12 ? 'am' : 'pm';
    const hourInWords = hours[hour % 12];
    let minuteInWords;

    if (minute === 0) {
        if (hour === 0) return 'midnight';
        if (hour === 12) return 'noon';
        return `${hourInWords} o'clock ${period}`;
    } else if (minute < 10) {
        minuteInWords = `oh ${minutes[minute]}`;
    } else if (minute < 20) {
        minuteInWords = minutes[minute];
    } else {
        minuteInWords = `${minutes[20]} ${minutes[minute % 10]}`;
    }

    return `${hourInWords} ${minuteInWords} ${period}`;
}

// Test cases
const testCases = [
    { input: '00:00', expectedOutput: 'midnight' },
    { input: '00:12', expectedOutput: 'twelve twelve am' },
    { input: '01:00', expectedOutput: 'one o\'clock am' },
    { input: '06:01', expectedOutput: 'six oh one am' },
    { input: '06:10', expectedOutput: 'six ten am' },
    { input: '06:18', expectedOutput: 'six eighteen am' },
    { input: '06:30', expectedOutput: 'six thirty am' },
    { input: '10:34', expectedOutput: 'ten thirty four am' },
    { input: '12:00', expectedOutput: 'noon' },
    { input: '12:09', expectedOutput: 'twelve oh nine pm' },
    { input: '23:23', expectedOutput: 'eleven twenty three pm' }
];

testCases.forEach(({ input, expectedOutput }) => {
    const output = timeToWords(input);
    console.log(`Input: ${input}, Expected Output: ${expectedOutput}, Output: ${output}`);
});
