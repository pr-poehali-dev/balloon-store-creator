import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FileUploadTabProps {
  dragActive: boolean;
  uploadProgress: number;
  isUploading: boolean;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDownloadTemplate: (format: 'excel' | 'yml') => void;
}

const FileUploadTab: React.FC<FileUploadTabProps> = ({
  dragActive,
  uploadProgress,
  isUploading,
  onDrag,
  onDrop,
  onFileInput,
  onDownloadTemplate
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
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
            onDragEnter={onDrag}
            onDragLeave={onDrag}
            onDragOver={onDrag}
            onDrop={onDrop}
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
              onChange={onFileInput}
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
                onClick={() => onDownloadTemplate('excel')}
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
                onClick={() => onDownloadTemplate('yml')}
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
  );
};

export default FileUploadTab;