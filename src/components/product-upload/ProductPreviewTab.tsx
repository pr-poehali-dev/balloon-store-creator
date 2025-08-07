import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

interface ProductPreviewTabProps {
  products: Product[];
  onRemoveProduct: (id: string) => void;
}

const ProductPreviewTab: React.FC<ProductPreviewTabProps> = ({
  products,
  onRemoveProduct
}) => {
  return (
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
                    onClick={() => onRemoveProduct(product.id)}
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
  );
};

export default ProductPreviewTab;