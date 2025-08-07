import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  status: 'pending' | 'uploaded' | 'error';
}

interface NewProduct {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

interface ManualAddTabProps {
  newProduct: NewProduct;
  setNewProduct: (product: NewProduct) => void;
  onAddProduct: () => void;
  categories: string[];
  balloonEmojis: string[];
}

const ManualAddTab: React.FC<ManualAddTabProps> = ({
  newProduct,
  setNewProduct,
  onAddProduct,
  categories,
  balloonEmojis
}) => {
  return (
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
                onClick={onAddProduct}
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
  );
};

export default ManualAddTab;