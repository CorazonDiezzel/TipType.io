
const test_typing = (() => {
    var quoteDisplayE;
    var quoteInputE;

    var seconds = 00
    var tens = 00
    var appendTens
    var appendSeconds
    var Interval

    function startTimer() {
        clearInterval(Interval)
        Interval = setInterval(invokeTimer, 10)
    }

    function stopTimer() {
        clearInterval(Interval)
    }

    function resetTimer() {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }


    function invokeTimer() {
        tens++

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if (tens > 9) {
            appendTens.innerHTML = tens

        }

        if (tens > 99) {
            console.log("seconds")
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

    }
    
    async function iRenderQuote (meta) {
        const quote = meta.getRandomQuote()
        console.log("awdawd"+quote);
        quoteDisplayE.innerHTML = ''
        quote.split('').forEach(chara => {
            const charSpan = document.createElement('span')
            charSpan.classList.add('correct')
            charSpan.innerText = chara
            quoteDisplayE.appendChild(charSpan)
        });
        quoteInputE.value = null
        resetTimer()
    }

    return {
        initialize: function (meta) {
            quoteDisplayE = document.getElementById('quoteDisplay')
            quoteInputE = document.getElementById('quoteInput')
            appendTens = document.getElementById("tens")
            appendSeconds = document.getElementById("seconds")

            quoteInputE.addEventListener('input', () => {
                const arrayQuote = quoteDisplayE.querySelectorAll('span')
                const arrayValue = quoteInputE.value.split('')
                startTimer();
                let correct = true;
                arrayQuote.forEach((charSpan, index) => {
                    const iChar = arrayValue[index]
                    if (iChar == null) {
                        charSpan.classList.remove('correct')
                        charSpan.classList.remove('incorrect')
                        correct = false
                    } else if (iChar === charSpan.innerText) {
                        charSpan.classList.add('correct')
                        charSpan.classList.remove('incorrect')
                    } else {
                        charSpan.classList.add('incorrect')
                        charSpan.classList.remove('correct')
                        correct = false
                    }
                })

                if (correct) {
                    stopTimer()
                    iRenderQuote(meta)
                }
            })
            iRenderQuote(meta)
        },renderQuotes:function(meta){
            iRenderQuote(meta);
        }
    }
})();
