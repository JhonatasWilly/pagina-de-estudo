export default function initAcordeonList() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  const activClass = 'ativo'

  if (accordionList.length) {
    accordionList[0].classList.add(activClass)
    accordionList[0].nextElementSibling.classList.add(activClass)

    function activeAccordion() {
      this.classList.toggle(activClass)
      this.nextElementSibling.classList.toggle(activClass)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
