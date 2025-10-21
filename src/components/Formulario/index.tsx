import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Video from '../../interfaces/videos';
import styles from './Formulario.module.scss'

interface FormularioVideoProps {
  adicionarVideo: (video: Video) => void;
}

interface VideoFormData {
  titulo: string;
  descricao: string;
  url: string;
  imagem: string;
  categoria: string;
}

const FormularioVideo = ({ adicionarVideo }: FormularioVideoProps) => {
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<VideoFormData>({
    mode: 'onBlur'
  });

  const watchAllFields = watch();

  const enviarDados = async (novoVideo: Video) => {
    try {
      const resposta = await axios.post(
        'https://my-json-server.typicode.com/joaoguiaguiar/videos-API/videos',
        novoVideo
      );
      console.log('Dados enviados:', resposta.data);
      return true;
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro);
      return false;
    }
  };

  const onSubmit: SubmitHandler<VideoFormData> = async (data) => {
    setLoading(true);

    try {
      const novoVideo: Video = {
        id: Date.now(),
        titulo: data.titulo,
        descricao: data.descricao,
        url: data.url,
        imagem: data.imagem,
        categoria: data.categoria,
      };

      adicionarVideo(novoVideo);
      const sucessoEnvio = await enviarDados(novoVideo);

      if (sucessoEnvio) {
        setSucesso(true);
        reset();

        setTimeout(() => {
          setSucesso(false);
        }, 5000);
      }
    } catch (erro) {
      console.error('Erro ao adicionar vídeo:', erro);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className={styles.formPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>Criar Novo Vídeo</h1>
          <p>Compartilhe seu conhecimento com a comunidade DevStream</p>
        </div>

        {sucesso && (
          <div className={styles.successMessage}>
            Vídeo adicionado com sucesso! 🎉
          </div>
        )}

        <div className={styles.formCard}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Título */}
            <div className={styles.formGroup}>
              <label htmlFor="titulo">
                Título do Vídeo
                <span className={styles.required}>*</span>
              </label>
              <input
                id="titulo"
                type="text"
                placeholder="Ex: Curso Completo de React.js"
                className={errors.titulo ? styles.error : ''}
                {...register('titulo', {
                  required: 'O título é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O título deve ter no mínimo 3 caracteres'
                  },
                  maxLength: {
                    value: 100,
                    message: 'O título deve ter no máximo 100 caracteres'
                  }
                })}
              />
              {errors.titulo && (
                <span className={styles.errorMessage}>{errors.titulo.message}</span>
              )}
            </div>

            {/* Categoria */}
            <div className={styles.formGroup}>
              <label htmlFor="categoria">
                Categoria
                <span className={styles.required}>*</span>
              </label>
              <select
                id="categoria"
                className={errors.categoria ? styles.error : ''}
                {...register('categoria', {
                  required: 'Selecione uma categoria'
                })}
              >
                <option value="">Selecione uma categoria</option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
                <option value="Banco de Dados">Banco de Dados</option>
                <option value="UX Design">UX Design</option>
                <option value="DevOps">DevOps</option>
                <option value="Mobile">Mobile</option>
                <option value="Cloud">Cloud</option>
              </select>
              {errors.categoria && (
                <span className={styles.errorMessage}>{errors.categoria.message}</span>
              )}
            </div>

            {/* Descrição */}
            <div className={styles.formGroup}>
              <label htmlFor="descricao">
                Descrição
                <span className={styles.required}>*</span>
              </label>
              <textarea
                id="descricao"
                placeholder="Descreva o conteúdo do seu vídeo..."
                className={errors.descricao ? styles.error : ''}
                {...register('descricao', {
                  required: 'A descrição é obrigatória',
                  minLength: {
                    value: 10,
                    message: 'A descrição deve ter no mínimo 10 caracteres'
                  },
                  maxLength: {
                    value: 500,
                    message: 'A descrição deve ter no máximo 500 caracteres'
                  }
                })}
              />
              {errors.descricao && (
                <span className={styles.errorMessage}>{errors.descricao.message}</span>
              )}
              <span className={styles.helperText}>
                {watchAllFields.descricao?.length || 0}/500 caracteres
              </span>
            </div>

            {/* URL do Vídeo */}
            <div className={styles.formGroup}>
              <label htmlFor="url">
                URL do Vídeo
                <span className={styles.required}>*</span>
              </label>
              <input
                id="url"
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                className={errors.url ? styles.error : ''}
                {...register('url', {
                  required: 'A URL do vídeo é obrigatória',
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: 'Digite uma URL válida'
                  }
                })}
              />
              {errors.url && (
                <span className={styles.errorMessage}>{errors.url.message}</span>
              )}
            </div>

            {/* URL da Imagem */}
            <div className={styles.formGroup}>
              <label htmlFor="imagem">
                URL da Thumbnail
                <span className={styles.required}>*</span>
              </label>
              <input
                id="imagem"
                type="url"
                placeholder="https://exemplo.com/imagem.jpg"
                className={errors.imagem ? styles.error : ''}
                {...register('imagem', {
                  required: 'A URL da imagem é obrigatória',
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: 'Digite uma URL válida'
                  }
                })}
              />
              {errors.imagem && (
                <span className={styles.errorMessage}>{errors.imagem.message}</span>
              )}
            </div>

            {/* Preview */}
            {(watchAllFields.titulo || watchAllFields.descricao) && (
              <div className={styles.videoPreview}>
                <h3>Preview do Card</h3>
                <div className={styles.previewItem}>
                  <strong>Título:</strong> {watchAllFields.titulo || 'Sem título'}
                </div>
                <div className={styles.previewItem}>
                  <strong>Categoria:</strong> {watchAllFields.categoria || 'Não selecionada'}
                </div>
                <div className={styles.previewItem}>
                  <strong>Descrição:</strong> {watchAllFields.descricao || 'Sem descrição'}
                </div>
              </div>
            )}

            {/* Botões */}
            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={handleCancel}
                disabled={loading}
              >
                Voltar
              </button>
              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className={styles.spinner}></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span>+</span>
                    Criar Vídeo
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioVideo;