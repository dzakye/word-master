import Modal from 'react-modal'
import { ReactComponent as Github } from '../data/Github.svg'
import { ReactComponent as Close } from '../data/Close.svg'

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

type Props = {
  isOpen: boolean
  handleClose: () => void
  darkMode: boolean
  styles: any
}

export const InfoModal = ({ isOpen, handleClose, darkMode, styles }: Props) => (
  <Modal isOpen={isOpen} onRequestClose={handleClose} style={styles} contentLabel="Game Info Modal">
    <div className={`h-full ${darkMode ? 'dark' : ''}`}>
      <button
        className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
        onClick={handleClose}
      >
        <Close />
      </button>
      <div className="h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark">
        <div className="flex-1 w-full sm:text-base text-sm">
          <h1 className="text-center sm:text-3xl text-xl">Cómin dzowe</h1>
          <ul className="list-disc pl-5 block sm:text-base text-sm">
            <li className="mt-6 mb-2 sm:text-2xl text-xl">
            <a href=" " title="Tu peux essayer de deviner le mot 6 fois.">
              To pou aprowa d'ëndinna ó mó 6 âdzó.</a>
            </li>
            <li className="mb-2 sm:text-2xl text-xl">
              Ma i té fóou ënpléé dé mó kyé éziston ën Chavyéjan. 
              <a href="https://patwe.ch/lexique-favre-balet/recherche-lexique-balet-favre/" target="blank">
              I dichyónér.ó l'é ËNKYE
              </a>
            </li>
            <li className="mb-2 sm:text-2xl text-xl">
              Aprèi tsekye ëndinnâe, é caron van eni vè, dzânó, ou gri.
            </li>
          </ul>
          <div className="mb-4 mt-2 flex items-center">
            <span className="nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              Ō
            </span>
            <span className="mx-2 text-3x">=</span>
            <span className="mb-2 text-xl">Wétra jesta, ou bon rlwa</span>
          </div>
          <div className="mb-3">
            <span className="nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              Ë
            </span>
            <span className="mx-2 text-3x">=</span>
            <span className="mb-2 text-xl">Wétra jesta, PA ou bon rlwa</span>
          </div>
          <span className="nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
            Â
          </span>
          <span className="mx-2 text-3x">=</span>
          <span className="mb-2 text-xl">Wétra fósa</span>
        </div>
        <div className="mt-3 flex justify-center sm:text-base text-sm">
          <span className="mb-2 text-xl">Sti prójé l'é ën partâdzó wibró ('open source')</span>
          <a
            className="ml-[6px] rounded-full h-5 w-5 sm:h-6 sm:w-6"
            href="https://github.com/octokatherine/word-master"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  </Modal>
)
