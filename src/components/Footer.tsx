import Link from 'next/link'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-primary text-accent pt-14 pb-6 border-t border-gray-700">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {/* Onde Estamos */}
          <div>
            <div className="flex flex-col items-center lg:items-start mb-3">
              <div className="bg-green-100 rounded-full p-2 mb-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" /><path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"/></svg>
              </div>
              <span className="font-bold text-white text-base mb-2">Onde estamos</span>
            </div>
            <div className="text-white text-sm">Av. Marcelino de Queiroz 708,</div>
            <div className="text-white text-sm">4740-444 Forjães</div>
            <div className="text-white text-sm">Esposende</div>
          </div>

          {/* Horários */}
          <div>
            <div className="flex flex-col items-center lg:items-start mb-3">
              <div className="bg-green-100 rounded-full p-2 mb-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </div>
              <span className="font-bold text-gray-300 text-base mb-2 text-white">Horários</span>
            </div>
            <div className="text-gray-200 text-sm"><span className="font-bold text-white">Segunda a Sexta: </span> 10h30–2h00</div>
            <div className="text-gray-200 text-sm"><span className="font-bold text-white">Sábado: </span> 10h30–2h00</div>
            <div className="text-gray-200 text-sm"><span className="font-bold text-white">Domingo: </span> 10h30–2h00</div>
          </div>

          {/* Contactos */}
          <div>
            <div className="flex flex-col items-center lg:items-start mb-3">
              <div className="bg-green-100 rounded-full p-2 mb-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"></path></svg>
              </div>
              <span className="font-bold text-gray-300 text-base mb-2 text-white">Contactos</span>
            </div>
            <div className="font-bold text-sm text-white">Telemóvel</div>
            <div className="text-gray-200 mb-1 text-sm">+351 933 834 749</div>
            <div className="font-bold text-sm text-white">Email</div>
            <a href="mailto:pedrabar25@gmail.com" className="text-secondary font-semibold text-sm hover:underline">pedrabar25@gmail.com</a>
          </div>

          {/* Estamos Online */}
          <div>
            <div className="flex flex-col items-center lg:items-start mb-3">
              <div className="bg-green-100 rounded-full p-2 mb-2">
              <svg
  className="w-6 h-6 text-secondary"
  fill="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
<g className="transform scale-125 origin-center">
  <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"></path>
</g>
</svg></div>
              <span className="font-bold text-gray-300 text-base mb-2 text-white">Estamos online</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 mt-2">
              <SocialIcons className="!space-x-3 [&>a]:bg-white/10 [&>a]:rounded-full [&>a]:shadow [&>a]:p-2 [&>a]:w-9 [&>a]:h-9 [&>a]:flex [&>a]:items-center [&>a]:justify-center hover:[&>a]:bg-secondary/20 transition" iconColor="text-white" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs">
          &copy; Pedra Bar, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
} 