import { useState } from 'react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'bombas',
      title: 'Bombas Hidraulicas',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-hero-pump-GeCoetVvotjFp7hvjKa5jo.webp',
    },
    {
      id: 2,
      category: 'cilindros',
      title: 'Cilindros Hidraulicos',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-cylinder-jdScgygP3NzA9zcMGcB6WP.webp',
    },
    {
      id: 3,
      category: 'valvulas',
      title: 'Valvulas e Componentes',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-valve-MWR5NFHHQrqHkiByFcfFQh.webp',
    },
    {
      id: 4,
      category: 'oficina',
      title: 'Oficina Tecnica',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-workshop-SzZCcmJnkBvZcN8o3FjYJh.webp',
    },
    {
      id: 5,
      category: 'motores',
      title: 'Motores Hidraulicos',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    },
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bombas', label: 'Bombas Hidraulicas' },
    { id: 'cilindros', label: 'Cilindros Hidraulicos' },
    { id: 'valvulas', label: 'Valvulas e Componentes' },
    { id: 'oficina', label: 'Oficina Tecnica' },
    { id: 'motores', label: 'Motores Hidraulicos' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
            Equipamentos e <span className="text-orange-600">servicos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Atuamos na manutencao e recuperacao de uma ampla linha de componentes hidraulicos mobil.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-orange-400 text-sm font-semibold mb-1">CATEGORIA</p>
                  <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Poppins' }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
