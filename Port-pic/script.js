var countOptions = {
    useEasing: true,
    separator: ''
}

var count = new CountUp('MyNumber', 0, 2016, 0, 5, countOptions)

// start the counting and give it a callback when done
count.start(function () {
    $('h2').text('finished')
})