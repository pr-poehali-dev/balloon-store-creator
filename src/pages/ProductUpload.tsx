import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualAddTab from '@/components/product-upload/ManualAddTab';
import FileUploadTab from '@/components/product-upload/FileUploadTab';
import ProductPreviewTab from '@/components/product-upload/ProductPreviewTab';

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

          <TabsContent value="manual">
            <ManualAddTab
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              onAddProduct={handleAddProduct}
              categories={categories}
              balloonEmojis={balloonEmojis}
            />
          </TabsContent>

          <TabsContent value="file">
            <FileUploadTab
              dragActive={dragActive}
              uploadProgress={uploadProgress}
              isUploading={isUploading}
              onDrag={handleDrag}
              onDrop={handleDrop}
              onFileInput={handleFileInput}
              onDownloadTemplate={downloadTemplate}
            />
          </TabsContent>

          <TabsContent value="preview">
            <ProductPreviewTab
              products={products}
              onRemoveProduct={removeProduct}
            />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductUpload;