const EasyScript = {
    date: {
        month: () => {
            var date = new Date()
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

            return months[date.getMonth()]
        },
        day: () => {
            var date = new Date()
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

            return days[date.getDay()]
        },
        year: () => {
            var date = new Date()

            return parseInt(date.getFullYear())
        },
        date: () => {
            var date = new Date()

            return `${ EasyScript.date.day() }, the ${ date.getDate() } of ${ EasyScript.date.month() }, ${ EasyScript.date.year() }`
        },
        hours: () => {
            var date = new Date()
            var hour = date.getHours()
            return hour
        },
        minutes: () => {
            var date = new Date()
            var minute = date.getMinutes()
            return minute
        },
        time: () => {
            return `${ EasyScript.date.hours() }:${ EasyScript.date.minutes() }`
        }
    },
    math: {
        random: (min = 0, max = 1) => {
            max += 1
            return Math.floor(Math.random() * (max - min) + min)
        },
        decimalRandom: (min = 0, max = 2) => {
            return Math.random() * (max - min) + min
        }
    },
    command: {
        copyToClipboard: (text = '', showMessage = false) => {
            var aux = document.createElement("input");
            aux.setAttribute("value", text);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);

            if (showMessage) {
                var textCopiedDiv = document.createElement('div')
                textCopiedDiv.textContent = 'Text Copied'
                textCopiedDiv.style.position = 'fixed'
                textCopiedDiv.style.top = '0'
                textCopiedDiv.style.right = '0'
                textCopiedDiv.style.background = '#000'
                textCopiedDiv.style.padding = '10px'

                document.body.appendChild(textCopiedDiv)

                setTimeout(() => document.body.removeChild(textCopiedDiv), 500)
            }
        },
        addProgressbar: (progressbarColor = '#000', progressbarHeight = '3px') => {
            const progressbarContainer = document.createElement('div')
            const progressbar = document.createElement('div')
            progressbarContainer.appendChild(progressbar)
            progressbar.style.width = '0%'
            progressbar.style.height = '100%'
            progressbar.style.background = progressbarColor

            progressbarContainer.style.width = '100%'
            progressbarContainer.style.top = '0'
            progressbarContainer.style.left = '0'
            progressbarContainer.style.right = '0'
            progressbarContainer.style.position = 'fixed'
            progressbarContainer.style.height = progressbarHeight
            progressbarContainer.style.background = 'rgba(0, 0, 0, 0.623)'


            function ScrollProgressBar() {
                var scrollTop = document.documentElement.scrollTop
                var scrollHeight = document.documentElement.scrollHeight
                var clientHeight = document.documentElement.clientHeight

                var windowHeight = scrollHeight - clientHeight
                var percentage = scrollTop / windowHeight * 100

                progressbar.style.width = `${percentage}%`
            }

            window.addEventListener('scroll', ScrollProgressBar)

            document.body.appendChild(progressbarContainer)
        },
        selectFirstWord: (elementSelected = document.querySelector('selectFirstWord'), classToAdd = 'first-word') => {
            const first = elementSelected

            let firstLetterText = first.textContent.split(' ')

            first.textContent = ' '
            firstLetterText.forEach((text, index) => {
                if (index == 0) {
                    first.innerHTML += `'<span class="${ classToAdd }">${ text }</span>'`
                } else {
                    first.innerHTML += ' ' + text
                }
            })
        },
        selectLastWord: (elementSelected = document.querySelector('selectFirstWord'), classToAdd = 'first-word') => {
            const last = elementSelected

            let lastLetterText = last.textContent.split(' ')
            
            last.textContent = ''
            
            lastLetterText.forEach((text, index) => {
                if(index == lastLetterText.length - 1) {
                    last.innerHTML += `<span class="${ classToAdd }">${ text }</span>`
                }else {
                    last.innerHTML += `${ text } `
                }
            })
            
        },
        passToArray: (stringToPass = 'something', passBy = '') => {
            return stringToPass.split(passBy)
        }
    },
    dom: {
        hideElement: element => {
            element.style.visibility = 'hidden'
        },
        showElement: element => {
            element.style.visibility = 'visible'
        },
        event: (event, element, eventFunction) => {
            element.addEventListener(event, eventFunction)
        }
    }
}

module.exports = EasyScript