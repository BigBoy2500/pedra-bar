import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container pb-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Entre em Contacto</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informações de Contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Informações de Contacto</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" /><path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-700">Endereço</h3>
                <p className="text-gray-600">Rua dos Ferreiros 634,</p>
                <p className="text-gray-600">4740-444 Forjães</p>
                <p className="text-gray-600">Esposende</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-700">Telefone</h3>
                <p className="text-gray-600">+351 123 456 789</p>
                <p className="text-gray-600">+351 987 654 321</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-700">Email</h3>
                <p className="text-gray-600">info@pedrabar.pt</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-700">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda a Sexta: 08h00–22h00</p>
                <p className="text-gray-600">Sábado: 09h00–23h00</p>
                <p className="text-gray-600">Domingo: 09h00–20h00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Localização / Google Maps */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Localização</h2>
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1773.6145995140525!2d-8.749701038709238!3d41.61570511820338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b49d4a3cad6d%3A0xbe962b5900cbc2f1!2sBar%20Da%20Pedra!5e0!3m2!1spt-PT!2spt!4v1749345947861!5m2!1spt-PT!2spt" width="100%" height="100%" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="text-center mt-4">
            <Link href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Ferreiros+634,+4740-444+Forjães,+Esposende" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              Ver mapa maior
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 