import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  status: 'pending' | 'uploaded' | 'error';
}

const ProductUpload = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Форма для ручного добавления
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Для девочки',
    image: '🎈'
  });

  const categories = [
    'Для девочки', 'Для мальчика', 'Для неё', 'Для него', 
    'На выписку', 'На годик', 'Фотозоны', 'Букеты из шаров'
  ];

  const balloonEmojis = ['🎈', '🎉', '🎊', '🎁', '🎂', '🎵', '🌟', '✨', '💖', '🦄', '👑', '⚡'];

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      category: newProduct.category,
      image: newProduct.image,
      status: 'uploaded'
    };

    setProducts([...products, product]);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      category: 'Для девочки',
      image: '🎈'
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      if (file.type === 'application/vnd.ms-excel' || 
          file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          file.name.endsWith('.yml') || file.name.endsWith('.yaml')) {
        
        setIsUploading(true);
        setUploadProgress(0);

        // Симуляция загрузки файла
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsUploading(false);
              processFile(file);
              return 100;
            }
            return prev + 10;
          });
        }, 200);
      }
    });
  };

  const processFile = (file: File) => {
    // Симуляция обработки файла и создания товаров
    const mockProducts: Product[] = [
      {
        id: Date.now().toString() + '_1',
        name: 'Шары для принцессы',
        description: 'Нежные розовые и белые шары',
        price: '2,990₽',
        category: 'Для девочки',
        image: '👑',
        status: 'uploaded'
      },
      {
        id: Date.now().toString() + '_2',
        name: 'Супергеройский набор',
        description: 'Синие и красные шары для мальчика',
        price: '3,490₽',
        category: 'Для мальчика',
        image: '⚡',
        status: 'uploaded'
      },
      {
        id: Date.now().toString() + '_3',
        name: 'Фотозона "Радуга"',
        description: 'Большая композиция разноцветных шаров',
        price: '15,990₽',
        category: 'Фотозоны',
        image: '🌈',
        status: 'uploaded'
      }
    ];

    setTimeout(() => {
      setProducts(prev => [...prev, ...mockProducts]);
    }, 500);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const downloadTemplate = (format: 'excel' | 'yml') => {
    // Симуляция скачивания шаблона
    const blob = new Blob([
      format === 'excel' 
        ? 'Название,Описание,Цена,Категория,Изображение\nПример товара,Описание товара,2990,Для девочки,🎈'
        : `products:
  - name: "Пример товара"
    description: "Описание товара"
    price: "2990"
    category: "Для девочки"
    image: "🎈"`
    ], { type: 'text/plain' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template.${format === 'excel' ? 'csv' : 'yml'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Upload" className="text-pink-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Быстрое добавление товаров
              </h1>
              <p className="text-gray-600">Загружайте товары по одному или файлом Excel/YML</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-100 text-blue-700">
              <Icon name="Package" size={16} className="mr-1" />
              {products.length} товаров добавлено
            </Badge>
            <Badge className="bg-green-100 text-green-700">
              <Icon name="CheckCircle" size={16} className="mr-1" />
              {products.filter(p => p.status === 'uploaded').length} успешно
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="manual" className="gap-2">
              <Icon name="Plus" size={16} />
              Добавить вручную
            </TabsTrigger>
            <TabsTrigger value="file" className="gap-2">
              <Icon name="FileUp" size={16} />
              Загрузить файл
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <Icon name="Eye" size={16} />
              Предварительный просмотр
            </TabsTrigger>
          </TabsList>

          {/* Ручное добавление */}
          <TabsContent value="manual">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Edit3" className="text-pink-600" size={24} />
                  Добавить товар вручную
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название товара *</label>
                      <Input
                        placeholder="Например: Шары на день рождения"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Описание</label>
                      <Textarea
                        placeholder="Описание товара, материалы, размеры..."
                        rows={3}
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Цена *</label>
                      <Input
                        placeholder="2,990₽"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Категория</label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Эмодзи для товара</label>
                      <div className="grid grid-cols-6 gap-2">
                        {balloonEmojis.map(emoji => (
                          <Button
                            key={emoji}
                            variant={newProduct.image === emoji ? "default" : "outline"}
                            className={`text-2xl h-12 ${newProduct.image === emoji 
                              ? "bg-gradient-to-r from-pink-500 to-purple-600" 
                              : "hover:border-pink-300"
                            }`}
                            onClick={() => setNewProduct({...newProduct, image: emoji})}
                          >
                            {emoji}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        onClick={handleAddProduct}
                        disabled={!newProduct.name || !newProduct.price}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      >
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить товар
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Загрузка файла */}
          <TabsContent value="file">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Upload" className="text-purple-600" size={24} />
                    Загрузка файла
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                      dragActive 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-300 hover:border-pink-400 hover:bg-pink-25'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Icon name="CloudUpload" size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium mb-2">Перетащите файлы сюда</p>
                    <p className="text-sm text-gray-600 mb-4">или нажмите для выбора</p>
                    <Button 
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-pink-500 to-purple-600"
                    >
                      Выбрать файлы
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".xlsx,.xls,.yml,.yaml"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </div>

                  {isUploading && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Загрузка файла...</span>
                        <span className="text-sm text-gray-600">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 space-y-2">
                    <p className="text-sm font-medium">Поддерживаемые форматы:</p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Excel (.xlsx, .xls)</Badge>
                      <Badge variant="outline">YAML (.yml, .yaml)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Download" className="text-green-600" size={24} />
                    Шаблоны файлов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Скачайте шаблон, заполните данными о товарах и загрузите обратно
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="FileSpreadsheet" className="text-green-600" size={24} />
                        <div>
                          <div className="font-medium">Excel шаблон</div>
                          <div className="text-xs text-gray-600">Для работы в Excel, Google Sheets</div>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => downloadTemplate('excel')}
                        className="border-green-300 hover:bg-green-50"
                      >
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Code" className="text-blue-600" size={24} />
                        <div>
                          <div className="font-medium">YAML шаблон</div>
                          <div className="text-xs text-gray-600">Для продвинутых пользователей</div>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => downloadTemplate('yml')}
                        className="border-blue-300 hover:bg-blue-50"
                      >
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-yellow-600 mt-0.5" size={16} />
                      <div className="text-sm">
                        <div className="font-medium text-yellow-800 mb-1">Требования к файлу:</div>
                        <ul className="text-yellow-700 text-xs space-y-1">
                          <li>• Максимальный размер: 10 МБ</li>
                          <li>• До 1000 товаров в одном файле</li>
                          <li>• Обязательные поля: название, цена</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Предварительный просмотр */}
          <TabsContent value="preview">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <Icon name="Package" className="text-indigo-600" size={24} />
                    Добавленные товары
                  </span>
                  {products.length > 0 && (
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить все
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {products.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="Package" size={64} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Нет добавленных товаров</h3>
                    <p className="text-gray-600 mb-6">Добавьте товары вручную или загрузите файл</p>
                    <div className="flex justify-center gap-4">
                      <Button 
                        onClick={() => document.querySelector('[value="manual"]')?.click()}
                        variant="outline"
                        className="border-pink-300"
                      >
                        Добавить вручную
                      </Button>
                      <Button 
                        onClick={() => document.querySelector('[value="file"]')?.click()}
                        className="bg-gradient-to-r from-pink-500 to-purple-600"
                      >
                        Загрузить файл
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <Card key={product.id} className="border-gray-200 hover:shadow-md transition-all relative">
                        <CardContent className="p-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute top-2 right-2 h-8 w-8 p-0 border-red-300 text-red-600 hover:bg-red-50"
                            onClick={() => removeProduct(product.id)}
                          >
                            <Icon name="X" size={14} />
                          </Button>
                          
                          <div className="text-4xl mb-3 text-center">{product.image}</div>
                          <div className="space-y-2">
                            <h3 className="font-semibold text-gray-900 pr-8">{product.name}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">{product.category}</Badge>
                              <span className="font-bold text-pink-600">{product.price}</span>
                            </div>
                            <Badge className={
                              product.status === 'uploaded' 
                                ? 'bg-green-100 text-green-700' 
                                : product.status === 'error'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }>
                              {product.status === 'uploaded' && '✅ Загружен'}
                              {product.status === 'error' && '❌ Ошибка'}
                              {product.status === 'pending' && '⏳ Ожидание'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductUpload;