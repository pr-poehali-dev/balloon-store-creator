import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ComponentBlock {
  id: string;
  type: string;
  name: string;
  icon: string;
  category: string;
  props: Record<string, any>;
}

interface DroppedComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  position: number;
}

const DragDropBuilder = () => {
  const [droppedComponents, setDroppedComponents] = useState<DroppedComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [draggedComponent, setDraggedComponent] = useState<ComponentBlock | null>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const componentBlocks: ComponentBlock[] = [
    {
      id: 'hero',
      type: 'hero',
      name: 'Главный блок',
      icon: 'Star',
      category: 'Заголовки',
      props: {
        title: 'Студия воздушных шаров',
        subtitle: 'Создаем праздничное настроение',
        buttonText: 'Заказать шары',
        backgroundImage: 'gradient-pink'
      }
    },
    {
      id: 'catalog',
      type: 'catalog',
      name: 'Каталог товаров',
      icon: 'Grid3X3',
      category: 'Каталоги',
      props: {
        title: 'Наши композиции',
        columns: 3,
        showPrices: true,
        items: [
          { name: 'Для девочек', price: '5,990₽', image: '🎀' },
          { name: 'Для мальчиков', price: '5,990₽', image: '🚂' },
          { name: 'На выписку', price: '12,900₽', image: '👶' }
        ]
      }
    },
    {
      id: 'gallery',
      type: 'gallery',
      name: 'Галерея фото',
      icon: 'Image',
      category: 'Медиа',
      props: {
        title: 'Наши работы',
        layout: 'masonry',
        images: ['🎈', '🎉', '🎊', '🎁', '🎂', '🎵']
      }
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      name: 'Отзывы клиентов',
      icon: 'MessageSquare',
      category: 'Контент',
      props: {
        title: 'Отзывы наших клиентов',
        reviews: [
          { name: 'Анна', text: 'Потрясающие шары! Спасибо за праздник!', rating: 5 },
          { name: 'Мария', text: 'Очень качественно и красиво', rating: 5 },
          { name: 'Елена', text: 'Быстрая доставка, все в срок', rating: 5 }
        ]
      }
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'Контакты',
      icon: 'Phone',
      category: 'Контент',
      props: {
        title: 'Свяжитесь с нами',
        phone: '+7 (999) 123-45-67',
        email: 'info@balloons.ru',
        address: 'Москва, ул. Праздничная, 15',
        socialLinks: ['telegram', 'whatsapp', 'instagram']
      }
    },
    {
      id: 'cta',
      type: 'cta',
      name: 'Призыв к действию',
      icon: 'Zap',
      category: 'Заголовки',
      props: {
        title: 'Готовы заказать?',
        subtitle: 'Свяжитесь с нами прямо сейчас',
        buttonText: 'Заказать консультацию',
        backgroundColor: 'gradient-purple'
      }
    }
  ];

  const categories = [...new Set(componentBlocks.map(block => block.category))];

  const handleDragStart = (e: React.DragEvent, component: ComponentBlock) => {
    setDraggedComponent(component);
    e.dataTransfer.setData('component', JSON.stringify(component));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentData = e.dataTransfer.getData('component');
    if (!componentData) return;

    const component = JSON.parse(componentData) as ComponentBlock;
    const newComponent: DroppedComponent = {
      id: `${component.type}-${Date.now()}`,
      type: component.type,
      props: { ...component.props },
      position: droppedComponents.length
    };

    setDroppedComponents([...droppedComponents, newComponent]);
    setDraggedComponent(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeComponent = (id: string) => {
    setDroppedComponents(droppedComponents.filter(comp => comp.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const updateComponentProps = (id: string, newProps: Record<string, any>) => {
    setDroppedComponents(droppedComponents.map(comp => 
      comp.id === id ? { ...comp, props: { ...comp.props, ...newProps } } : comp
    ));
  };

  const renderComponent = (component: DroppedComponent) => {
    const isSelected = selectedComponent === component.id;
    const baseClasses = `relative border-2 transition-all duration-200 ${
      isSelected ? 'border-pink-500 shadow-lg' : 'border-transparent hover:border-pink-300'
    }`;

    switch (component.type) {
      case 'hero':
        return (
          <div 
            key={component.id}
            className={`${baseClasses} bg-gradient-to-r from-pink-400 to-purple-500 text-white p-8 text-center rounded-lg`}
            onClick={() => setSelectedComponent(component.id)}
          >
            <h1 className="text-4xl font-bold mb-4">{component.props.title}</h1>
            <p className="text-xl mb-6">{component.props.subtitle}</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              {component.props.buttonText}
            </Button>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      case 'catalog':
        return (
          <div key={component.id} className={`${baseClasses} bg-white p-6 rounded-lg`} onClick={() => setSelectedComponent(component.id)}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{component.props.title}</h2>
            <div className={`grid grid-cols-${component.props.columns} gap-4`}>
              {component.props.items.map((item: any, index: number) => (
                <Card key={index} className="border-pink-200 hover:shadow-lg transition-all">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {component.props.showPrices && (
                      <p className="text-pink-600 font-bold">{item.price}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div key={component.id} className={`${baseClasses} bg-white p-6 rounded-lg`} onClick={() => setSelectedComponent(component.id)}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{component.props.title}</h2>
            <div className="grid grid-cols-3 gap-4">
              {component.props.images.map((image: string, index: number) => (
                <div key={index} className="bg-pink-100 rounded-lg p-8 text-center text-6xl hover:scale-105 transition-transform">
                  {image}
                </div>
              ))}
            </div>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      case 'testimonials':
        return (
          <div key={component.id} className={`${baseClasses} bg-gray-50 p-6 rounded-lg`} onClick={() => setSelectedComponent(component.id)}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{component.props.title}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {component.props.reviews.map((review: any, index: number) => (
                <Card key={index} className="border-pink-200">
                  <CardContent className="p-4">
                    <div className="flex mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-2">"{review.text}"</p>
                    <p className="text-sm text-gray-600">— {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      case 'contact':
        return (
          <div key={component.id} className={`${baseClasses} bg-white p-6 rounded-lg`} onClick={() => setSelectedComponent(component.id)}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{component.props.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-pink-600" size={20} />
                  <span>{component.props.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-pink-600" size={20} />
                  <span>{component.props.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-pink-600" size={20} />
                  <span>{component.props.address}</span>
                </div>
              </div>
              <div className="flex gap-4">
                {component.props.socialLinks.map((social: string, index: number) => (
                  <div key={index} className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-pink-600" />
                  </div>
                ))}
              </div>
            </div>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      case 'cta':
        return (
          <div 
            key={component.id}
            className={`${baseClasses} bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center rounded-lg`}
            onClick={() => setSelectedComponent(component.id)}
          >
            <h2 className="text-3xl font-bold mb-4">{component.props.title}</h2>
            <p className="text-lg mb-6">{component.props.subtitle}</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              {component.props.buttonText}
            </Button>
            {isSelected && (
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  removeComponent(component.id);
                }}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderPropertiesPanel = () => {
    if (!selectedComponent) {
      return (
        <div className="text-center text-gray-500 py-8">
          <Icon name="Settings" size={48} className="mx-auto mb-4 opacity-50" />
          <p>Выберите компонент для редактирования</p>
        </div>
      );
    }

    const component = droppedComponents.find(c => c.id === selectedComponent);
    if (!component) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Settings" size={20} className="text-pink-600" />
          <h3 className="font-semibold">Настройки компонента</h3>
        </div>

        {component.type === 'hero' && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Заголовок</label>
              <Input
                value={component.props.title}
                onChange={(e) => updateComponentProps(component.id, { title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Подзаголовок</label>
              <Textarea
                value={component.props.subtitle}
                onChange={(e) => updateComponentProps(component.id, { subtitle: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Текст кнопки</label>
              <Input
                value={component.props.buttonText}
                onChange={(e) => updateComponentProps(component.id, { buttonText: e.target.value })}
              />
            </div>
          </>
        )}

        {component.type === 'catalog' && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Заголовок</label>
              <Input
                value={component.props.title}
                onChange={(e) => updateComponentProps(component.id, { title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Количество колонок</label>
              <Input
                type="number"
                min="1"
                max="4"
                value={component.props.columns}
                onChange={(e) => updateComponentProps(component.id, { columns: parseInt(e.target.value) })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showPrices"
                checked={component.props.showPrices}
                onChange={(e) => updateComponentProps(component.id, { showPrices: e.target.checked })}
              />
              <label htmlFor="showPrices" className="text-sm">Показывать цены</label>
            </div>
          </>
        )}

        {(component.type === 'gallery' || component.type === 'testimonials' || component.type === 'contact' || component.type === 'cta') && (
          <div>
            <label className="block text-sm font-medium mb-2">Заголовок</label>
            <Input
              value={component.props.title}
              onChange={(e) => updateComponentProps(component.id, { title: e.target.value })}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Component Library */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="Blocks" size={20} className="text-pink-600" />
            Блоки для сайта
          </h3>
          
          {categories.map(category => (
            <div key={category} className="mb-6">
              <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">{category}</h4>
              <div className="space-y-2">
                {componentBlocks
                  .filter(block => block.category === category)
                  .map(component => (
                    <div
                      key={component.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, component)}
                      className="p-3 border border-gray-200 rounded-lg cursor-grab hover:border-pink-300 hover:shadow-sm transition-all bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Icon name={component.icon} size={16} className="text-pink-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{component.name}</div>
                          <div className="text-xs text-gray-500">Перетащите на сайт</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 flex flex-col">
        <div className="h-12 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold">Предварительный просмотр</h2>
            <Badge variant="outline">{droppedComponents.length} компонентов</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Icon name="Eye" size={16} />
              Просмотр
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
              <Icon name="Save" size={16} />
              Сохранить
            </Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div
            ref={dropZoneRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="min-h-full p-4 space-y-6"
          >
            {droppedComponents.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <Icon name="MousePointer" size={64} className="mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-medium mb-2">Перетащите блоки сюда</h3>
                <p>Начните создавать свой сайт, перетаскивая компоненты из левой панели</p>
              </div>
            ) : (
              droppedComponents.map(renderComponent)
            )}
          </div>
        </div>
      </div>

      {/* Properties Panel */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-4">
          {renderPropertiesPanel()}
        </div>
      </div>
    </div>
  );
};

export default DragDropBuilder;